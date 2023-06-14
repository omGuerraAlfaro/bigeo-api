import { Controller, Get, Param, Post, Body, Put, Delete } from '@nestjs/common';
import { FormService } from './form.service';
import { Form } from '../../models/form.model';
import { ParseDatePipe } from '../../pipes/transformDate.pipe';


@Controller('forms')
export class FormController {
  constructor(private readonly formService: FormService) { }

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
  async findByUserId(@Param('userId') userId: string) {
    return this.formService.findByUserId(userId);
  }


  //localhost:3400/forms/date/2023-01-17
  @Get('date/:date')
  async findByDate(@Param('date', new ParseDatePipe()) date: Date) {
    return this.formService.findByDate(date);
  }

  @Get('type/:type')
  async findByFormType2(@Param('type') type: string) {
    return this.formService.findByFormType(type);
  }
}