import { Controller, Get, Param, Post, Body, Put, Delete, UseGuards } from '@nestjs/common';
import { FormService } from './form.service';
import { Form } from '../../models/form.model';
import { JwtAuthGuard } from '../Auth/jwt-auth.guard';

@Controller('forms')
export class FormController {
  constructor(private readonly formService: FormService) {}

  @UseGuards(JwtAuthGuard)
  @Get()
  async findAll(){
    return this.formService.findAll();
  }

}
