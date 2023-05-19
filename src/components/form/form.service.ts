import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Form } from '../../models/form.models';

@Injectable()
export class FormService {
  constructor(
    @InjectRepository(Form)
    private readonly formRepository: Repository<Form>,
  ) {}

  async findAll(): Promise<Form[]> {
    return this.formRepository.find();
  }

  async findOne(form_id: number): Promise<any> {
    try {
      const form = await this.formRepository.findOne({
        where: { form_id },
      });
      if (!form) {
        throw new NotFoundException(`Form with ID ${form_id} not found`);
      }
      return {
        form,
      };
    } catch (error) {
      throw new Error(error);
    }
  }  

}
