import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Form, Properties } from '../../models/form.model';

@Injectable()
export class FormService {
  constructor(
    @InjectRepository(Form)
    private readonly formRepository: Repository<Form>,
    @InjectRepository(Properties)
    private readonly propertiesRepository: Repository<Properties>
  ) {}
  
  
  async addForm(form: Form): Promise<Form> {
    const newForm = this.formRepository.create(form);
    return this.formRepository.save(newForm);
  }

  async findAll(): Promise<Form[]> {
    const forms = await this.formRepository.find();
    return forms;
  }

  async findByDate(date: Date): Promise<Form[]> {
    return this.formRepository.createQueryBuilder('form')
      .leftJoinAndSelect('form.properties', 'properties')
      .where('form.dateTime = :date', { date })
      .getMany();
  }
}
