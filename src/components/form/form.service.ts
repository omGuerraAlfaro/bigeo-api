import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Form, Properties } from '../../models/form.model';

@Injectable()
export class FormService {
  constructor(
    @InjectRepository(Form)
    private readonly formRepository: Repository<Form>,
    @InjectRepository(Properties)
    private readonly propertiesRepository: Repository<Properties>,
  ) { }

  async create(form: Form): Promise<Form> {
    const newForm = this.formRepository.create(form);
    return this.formRepository.save(newForm);
  }

  async findAll(): Promise<Form[]> {
    return this.formRepository.find();
  }

  async findOne(id: number): Promise<Form> {
    return this.formRepository.findOne({ where: { form_id: id } });
  }
  
  async remove(id: number): Promise<void> {
    await this.formRepository.delete(id);
  }

  // async update(id: number, form: Form): Promise<Form> {
  //   await this.formRepository.update(id, form);
  //   return this.formRepository.findOne({ where: { form_id: id } });
  // }

  //Filtros
  async findByUserId(userId: string): Promise<Form[]> {
    const form = await this.formRepository.find({ where: { properties: { userId } }, relations: ['properties'] });    
    return form;
  }

  async findByDate(dateTime: Date): Promise<Form[]> {
    const form = await this.formRepository.find({ where: { properties: { dateTime } }, relations: ['properties'] });
    return form;
  }


  //typeForms
  async findByFormType(type: string): Promise<Form[]> {
    return void 0;
  }
}