import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FormController } from './form.controller';
import { FormService } from './form.service';
import { Form, FormRepository } from '../../models/form.models';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      Form, 
      FormRepository,
    ]),
  ],
  controllers: [FormController],
  providers: [FormService],
})
export class FormModule {}
