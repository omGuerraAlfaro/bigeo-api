import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  UseGuards,
} from '@nestjs/common';
import { UsersService } from './user.service';
import { Users } from '../../models/user.model';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from '../Auth/jwt-auth.guard';

@ApiBearerAuth()
@ApiTags('Users')
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}
  
  //Obtener todos los usuarios
  // @UseGuards(JwtAuthGuard)
  @Get()
  async getUsers() {
    return this.usersService.findAll();
  }

  //Obtener un usuario por username
  @UseGuards(JwtAuthGuard)
  @Get('/:username')
  async findOne(@Param('username') username: string): Promise<any> {
    return this.usersService.findOne(username);
  }

  
  //Login, buscar usuario por username y password
  // @Post('/login')
  // login(
  //   @Body('username') username: string,
  //   @Body('password') password: string,
  // ) {
  //   return this.usersService.login(username, password);
  // }
  
  
}
