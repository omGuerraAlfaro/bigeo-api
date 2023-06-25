import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Task } from '../../models/task.model';
import { Form } from '../../models/form.model';

@Injectable()
export class TaskService {
  constructor(
    @InjectRepository(Task)
    private readonly taskRepository: Repository<Task>,
    @InjectRepository(Form)
    private readonly formRepository: Repository<Form>,
  ) { }

  async create(task: Task): Promise<Task> {
    task.dateTime = task.dateTime || new Date();
    const newTask = this.taskRepository.create(task);

    if (task.assigned_form) {
      const form = await this.formRepository.findOne({ where: { form_id: task.assigned_form } });
      form.task = newTask;
      await this.formRepository.save(form);
    }    

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


  async countTaskWithCondition(status: string): Promise<number> {
    return await this.taskRepository
      .createQueryBuilder('task')
      .where('task.status = :status', { status })
      .getCount();
  }

  async countTask(): Promise<number> {
    return await this.taskRepository
      .createQueryBuilder('task')
      .getCount();
  }

}
