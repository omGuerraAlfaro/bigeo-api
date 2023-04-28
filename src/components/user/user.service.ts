import { Injectable } from '@nestjs/common';
import { Users } from '../../models/user.model';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, TypeORMError } from 'typeorm';
import { throwError } from 'rxjs';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(Users)
    private readonly usersRepository: Repository<Users>,
  ) {}
  async addUser(user: Users): Promise<Users> {
    return this.usersRepository.save(user);
  }
  async findOne(username: string): Promise<any> {
    try {
      const user = await this.usersRepository.findOne({
        where: { username },
      });
      return {
        user,
      };
    } catch (error) {
      return throwError(() => {
        Error((error as TypeORMError).message);
      });
    }
  }
  async login(username: string, password: string): Promise<any> {
    try {
      const user = await this.usersRepository.findOne({
        where: { username, password }
      });
      return user;
    } catch (error) {
      throwError(() => {
        return Error((error as TypeORMError).message);
      });
    }
  }
  async findAll(): Promise<any> {
    const users = await this.usersRepository.find();
    return users;
  }
}
