import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TaskController } from './task.controller';
import { TaskService } from './task.service';
import { Task } from '../../models/task.model';
import { Form } from 'src/models/form.model';

@Module({
  imports: [
    TypeOrmModule.forFeature([Task, Form])],
    
  controllers: [TaskController],
  providers: [TaskService],
  exports: [TaskService],
})
export class TaskModule { }
