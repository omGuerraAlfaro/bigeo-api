import { Controller, Get, Param, Post, Body, Put, Delete } from '@nestjs/common';
import { FormService } from './form.service';
import { Form } from '../../models/form.model';

@Controller('forms')
export class FormController {
  constructor(private readonly formService: FormService) {}

  @Post()
  create(@Body() form: Form) {
    return this.formService.create(form);
  }

  @Get()
  findAll() {
    return this.formService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.formService.findOne(+id);
  }  

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.formService.remove(+id);
  }

  @Get('user/:userId')
  async findByUserId(@Param('userId') userId: string){
    return this.formService.findByUserId(userId);
  }

  @Get('date/:date')
  async findByDate(@Param('date') dateTime: Date){
    return this.formService.findByDate(dateTime);
  }

  @Get('type/:type')
  async findByFormType(@Param('type') type: string){
    return this.formService.findByFormType(type);
  }
}