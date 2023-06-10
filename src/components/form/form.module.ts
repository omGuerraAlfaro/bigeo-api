import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FormController } from './form.controller';
import { FormService } from './form.service';
import { Form, Properties } from '../../models/form.model';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      Form, Properties
    ]),
  ],
  controllers: [FormController],
  providers: [FormService],
})
export class FormModule { }
