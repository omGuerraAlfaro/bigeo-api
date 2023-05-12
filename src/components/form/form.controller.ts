import { Controller, Get, Param, Post, Body, Put, Delete } from '@nestjs/common';
import { FormService } from './form.service';
import { Form } from '../../models/form.entity';

@Controller('forms')
export class FormController {
  constructor(private readonly formService: FormService) {}

  @Get()
  async findAll(): Promise<Form[]> {
    return this.formService.findAll();
  }

  @Get(':form_id')
  async findOne(@Param('form_id') id: number): Promise<Form> {
    return this.formService.findOne(id);
  }

  
}
