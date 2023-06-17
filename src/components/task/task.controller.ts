import { Controller, Get, Param, Post, Body, Put, Delete } from '@nestjs/common';
import { TaskService } from './task.service';
import { Task } from 'src/models/task.model';


@Controller('tasks')
export class TaskController {
  constructor(private readonly taskService: TaskService) { }


  @Get()
  findAll() {
    return this.taskService.findAll();
  }

  @Post()
  create(@Body() task: Task) {
    return this.taskService.create(task);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.taskService.findOne(+id);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.taskService.remove(+id);
  }

  //update status
  @Put(':id/status')
  updateStatus(@Param('id') id: string, @Body('status') status: string) {
    return this.taskService.updateStatus(+id, status);
  }


}