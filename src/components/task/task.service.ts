import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Task } from '../../models/task.model';

@Injectable()
export class TaskService {
  constructor(
    @InjectRepository(Task)
    private readonly taskRepository: Repository<Task>,
  ) { }

  async create(task: Task): Promise<Task> {
    const newTask = this.taskRepository.create(task);
    return this.taskRepository.save(newTask);
  }

  async findAll(): Promise<Task[]> {
    return this.taskRepository.find();
  }

  async findOne(id: number): Promise<Task> {
    return this.taskRepository.findOne({ where: { task_id: id } });
  }
  
  async remove(id: number): Promise<void> {
    await this.taskRepository.delete(id);
  }

  //update status
  async updateStatus(id: number, status: string): Promise<void> {
    await this.taskRepository.update(id, { status });
  }
  

}
