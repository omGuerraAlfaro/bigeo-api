import { Controller, Get, Param, Post, Body, Put, Delete } from '@nestjs/common';
import { FormService } from './form.service';
import { Form } from '../../models/form.model';

@Controller('forms')
export class FormController {
  constructor(private readonly formService: FormService) {}

  @Get()
  async findAll(){
    return this.formService.findAll();
  }
  

  
}
