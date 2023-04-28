import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { UsersService } from './user.service';
import { Users } from '../../models/user.model';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  async getUsers() {
    return this.usersService.findAll();
  }
  @Get('/:username')
  async findOne(@Param('username') username: string): Promise<any> {
    return this.usersService.findOne(username);
  }
  @Post()
  addUsers(@Body() users: Users) {
    return this.usersService.addUser(users);
  }

  @Post('/login')
  login(
    @Body('username') username: string,
    @Body('password') password: string,
  ) {
    return this.usersService.login(username, password);
  }
  
  // @Patch()
  // updateUser() {
  //   return this.appService.updateUser();
  // }
  // @Delete()
  // deleteUser() {
  //   return this.appService.deleteUser();
  // }
}
