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

  async update(id: number, form: Form): Promise<Form> {
    await this.formRepository.update(id, form);
    return this.formRepository.findOne({ where: { form_id: id } });
  }

  async remove(id: number): Promise<void> {
    await this.formRepository.delete(id);
  }

  async findByUserId(userId: string): Promise<Form[]> {
    const properties = await this.propertiesRepository.find({ where: { userId: userId } });

    const forms = [];
    for (let prop of properties) {
      const form = await this.formRepository.findOne({ where: { properties: prop } });
      if (form) {
        forms.push(form);
      }
    }

    return forms;
  }

  async findByDate(date: Date): Promise<Form[]> {
    const dateString = date.toISOString();
    const properties = await this.propertiesRepository.createQueryBuilder('properties')
        .where('properties.dateTime = :dateString', { dateString })
        .getMany();

    const forms = [];
    for (let prop of properties) {
      const form = await this.formRepository.findOne({ where: { properties: prop } });
      if (form) {
        forms.push(form);
      }
    }

    return forms;
  }

  async findByFormType(type: string): Promise<Form[]> {
    return this.formRepository.find({ where: { type: type } });
  }
}