import { Module } from '@nestjs/common';
import { UsersController } from './user.controller';
import { UsersService } from './user.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Users, UsersRepository } from '../../models/user.model';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      Users,
      UsersRepository,
    ]),
  ],
  controllers: [UsersController],
  providers: [UsersService],
})
export class UsersModule {}
