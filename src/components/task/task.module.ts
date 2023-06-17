import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TaskController } from './task.controller';
import { TaskService } from './task.service';
import { Task } from '../../models/task.model';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      Task,
    ]),
  ],
  controllers: [TaskController],
  providers: [TaskService],
})
export class TaskModule { }
