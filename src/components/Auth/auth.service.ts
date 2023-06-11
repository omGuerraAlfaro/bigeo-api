import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { JwtService } from "@nestjs/jwt";
import { compare, hash } from "bcrypt";
import { v4 as uuidv4 } from 'uuid';

import { Users } from "../../models/user.model";

import { LoginDto, RegisterDto } from "src/dto/login.dto";
import { HttpException, HttpStatus, Injectable } from "@nestjs/common";

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(Users)
    private userRepository: Repository<Users>,
    // @InjectRepository(Role)
    // private roleRepository: Repository<Role>,
    // @InjectRepository(UserRole)
    // private userRoleRepository: Repository<UserRole>,
    private jwtAuthService: JwtService,
  ) {}
//   async register(userObject: RegisterDto) {
//     const { password, username } = userObject;
//     const plainToHash = await hash(password, 10);
//     try {
//       // SI no existe se agerga
//       const userExist = await this.userRepository.findOne({
//         // relations: { roles: true },
//         where: { username: userObject.username },
//       });
//       if (!userExist) {
//         const user = { username, password: plainToHash };
//         await this.userRepository.save({
//           id: uuidv4(),
//           email: user.username,
//           password: user.password,
//         });
//         // for (const rol of roles) {
//         //   const roleEntity = await this.roleRepository.findOne({
//         //     where: { id: rol.id },
//         //   });
//         //   if (roleEntity) {
//         //     const userRole = new UserRole();
//         //     userRole.roleId = rol.id;
//         //     userRole.userId = userData.id;
//         //     await this.userRoleRepository.save(userRole);
//         //   }
//         // }
//         return {
//           body: userObject,
//           message: 'User Created',
//         };
//       } else {
//         throw new HttpException('EMAIL_ALREADY_EXIST', HttpStatus.FORBIDDEN);
//       }
//     } catch (error) {
//       console.log(error);
//     }
//   }
  async login(userObject: LoginDto) {
    const { username, password } = userObject;
    const user = await this.userRepository.findOne({
      where: { username },
    //   relations: {
    //     roles: true,
    //   },
    });
    if (!user) throw new HttpException('USER_NOT_FOUND', HttpStatus.NOT_FOUND);
    const chkPassword = await compare(password, user.password);
    if (!chkPassword)
      throw new HttpException('PASSWORD_INCORRECT', HttpStatus.FORBIDDEN);
    const payload = { username: userObject.username };
    const token = this.jwtAuthService.sign(payload);
    return {
      user,
      token,
    };
  }
}
