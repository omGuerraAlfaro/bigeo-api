import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Form } from '../../models/form.model';

@Injectable()
export class FormService {
  constructor(
    @InjectRepository(Form)
    private readonly formRepository: Repository<Form>,
  ) {}
  //buscar todos los formularios
  async addForm(form: Form): Promise<Form> {
    return this.formRepository.save(form);
  }

  async findAll(): Promise<Form[]> {
    const forms = await this.formRepository.find();
    return forms;
  }
}
