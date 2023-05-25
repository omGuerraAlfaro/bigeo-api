import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { JwtService } from "@nestjs/jwt";
import { compare, hash } from "bcrypt";

import { Users } from "../../models/user.model";

import { LoginDto, RegisterDto } from "src/dto/login.dto";
import { HttpException, HttpStatus, Injectable } from "@nestjs/common";

@Injectable()
export class AuthService {
    constructor(
        @InjectRepository(Users)
        private readonly userRepository: Repository<Users>,
        private jwtService: JwtService
    ) { }

    async register(userObject: RegisterDto) {
        const { username, password } = userObject;
        const plaintToHash = await hash(password, 10);
        userObject = { ...userObject, password: plaintToHash };
        const userExist = await this.userRepository.findOne({
            where: { username: userObject.username },
        });
        if (!userExist) {
            await this.userRepository.save(userObject);
            return {
                body: userObject,
                message: "User created",
            };
        } else {
            throw new HttpException("USER_EXIST", HttpStatus.FORBIDDEN);
        }
    }

    async login(userObject: LoginDto) {
        const { username, password } = userObject;
        const userExist = await this.userRepository.findOne({
            where: { username },
        });
        if (!userExist) {
            throw new HttpException("USER_NOT_FOUND", HttpStatus.NOT_FOUND);
        };
        const passwordMatch = await compare(password, userExist.password);
        if (!passwordMatch) {
            throw new HttpException("PASSWORD_NOT_MATCH", HttpStatus.FORBIDDEN);
        };
        const payload = {
            username: userObject.username,
        };
        const token = await this.jwtService.sign(payload);
        return {
            userExist,
            token,
        };
    }


}