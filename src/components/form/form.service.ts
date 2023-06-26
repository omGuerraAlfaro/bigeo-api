import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import * as moment from 'moment-timezone';
import { Form } from '../../models/form.model';

@Injectable()
export class FormService {
  constructor(
    @InjectRepository(Form)
    private readonly formRepository: Repository<Form>,
  ) { }

  async create(form: Form): Promise<Form> {
    const newForm = this.formRepository.create(form);
    return this.formRepository.save(newForm);
  }


  async findAll(): Promise<Form[]> {
    return this.formRepository
      .createQueryBuilder('form')
      .leftJoinAndSelect('form.properties', 'properties')
      .leftJoinAndSelect('form.task', 'task')
      .leftJoinAndSelect('properties.formSprinkler', 'formSprinkler')
      .leftJoinAndSelect('properties.formDamage', 'formDamage')
      .leftJoinAndSelect('properties.formHumidity', 'formHumidity')
      .leftJoinAndSelect('properties.formCompaction', 'formCompaction')
      .leftJoinAndSelect('properties.formFauna', 'formFauna')
      .leftJoinAndSelect('properties.formCount', 'formCount')
      .leftJoinAndSelect('properties.formDiseases', 'formDiseases')
      .leftJoinAndSelect('properties.formGirdling', 'formGirdling')
      .leftJoinAndSelect('properties.formPlague', 'formPlague')
      .leftJoinAndSelect('form.geometry', 'geometry')
      .orderBy('properties.dateTime', 'DESC')
      .take(2000)
      .getMany();
  }


  async findAllFormWithTask(): Promise<Form[]> {
    return this.formRepository
      .createQueryBuilder('form')
      .leftJoinAndSelect('form.properties', 'properties')
      .leftJoinAndSelect('form.task', 'task')
      .leftJoinAndSelect('properties.formSprinkler', 'formSprinkler')
      .leftJoinAndSelect('properties.formDamage', 'formDamage')
      .leftJoinAndSelect('properties.formHumidity', 'formHumidity')
      .leftJoinAndSelect('properties.formCompaction', 'formCompaction')
      .leftJoinAndSelect('properties.formFauna', 'formFauna')
      .leftJoinAndSelect('properties.formCount', 'formCount')
      .leftJoinAndSelect('properties.formDiseases', 'formDiseases')
      .leftJoinAndSelect('properties.formGirdling', 'formGirdling')
      .leftJoinAndSelect('properties.formPlague', 'formPlague')
      .leftJoinAndSelect('form.geometry', 'geometry')
      .where('task.assigned_form IS NOT NULL')
      .orderBy('properties.dateTime', 'DESC')
      .take(1000)
      .getMany();
  }


  async findOne(id: number): Promise<Form> {
    return this.formRepository.findOne({ where: { form_id: id } });
  }

  async remove(id: number): Promise<void> {
    await this.formRepository.delete(id);
  }

  //Filters --------------
  //ok
  //For User
  async findByUserId(userId: string): Promise<Form[]> {
    const forms = await this.formRepository
      .createQueryBuilder('form')
      .leftJoinAndSelect('form.properties', 'properties')
      .leftJoinAndSelect('properties.formSprinkler', 'formSprinkler')
      .leftJoinAndSelect('properties.formDamage', 'formDamage')
      .leftJoinAndSelect('properties.formHumidity', 'formHumidity')
      .leftJoinAndSelect('properties.formCompaction', 'formCompaction')
      .leftJoinAndSelect('properties.formFauna', 'formFauna')
      .leftJoinAndSelect('properties.formCount', 'formCount')
      .leftJoinAndSelect('properties.formDiseases', 'formDiseases')
      .leftJoinAndSelect('properties.formGirdling', 'formGirdling')
      .leftJoinAndSelect('properties.formPlague', 'formPlague')
      .leftJoinAndSelect('form.geometry', 'geometry')
      .where('properties.userId = :userId', { userId })
      .take(1000)
      .getMany();

    return forms;
  }



  //ok
  //For Date
  async findByDate(date: Date): Promise<Form[]> {
    // Usar 'America/Santiago' para la zona horaria de Chile
    const timezone = 'America/Santiago';

    // Convertir la fecha dada a la zona horaria correcta
    const dateInCorrectTimezone = moment(date).tz(timezone);

    const startOfDay = dateInCorrectTimezone.startOf('day').toDate();
    const endOfDay = dateInCorrectTimezone.endOf('day').toDate();

    const forms = await this.formRepository
      .createQueryBuilder('form')
      .leftJoinAndSelect('form.properties', 'properties')
      .leftJoinAndSelect('properties.formSprinkler', 'formSprinkler')
      .leftJoinAndSelect('properties.formDamage', 'formDamage')
      .leftJoinAndSelect('properties.formHumidity', 'formHumidity')
      .leftJoinAndSelect('properties.formCompaction', 'formCompaction')
      .leftJoinAndSelect('properties.formFauna', 'formFauna')
      .leftJoinAndSelect('properties.formCount', 'formCount')
      .leftJoinAndSelect('properties.formDiseases', 'formDiseases')
      .leftJoinAndSelect('properties.formGirdling', 'formGirdling')
      .leftJoinAndSelect('properties.formPlague', 'formPlague')
      .leftJoinAndSelect('form.geometry', 'geometry')
      .where('properties.dateTime BETWEEN :startOfDay AND :endOfDay', { startOfDay, endOfDay })
      .getMany();

    return forms;
  }


  //ok
  //For typeForms
  async findByFormType(formType: string): Promise<Form[]> {
    const validFormTypes = ['formSprinkler', 'formDamage', 'formHumidity', 'formCompaction', 'formFauna', 'formCount', 'formDiseases', 'formGirdling', 'formPlague'];

    if (!validFormTypes.includes(formType)) {
      throw new Error(`Invalid form type: ${formType}`);
    }

    const forms = await this.formRepository
      .createQueryBuilder('form')
      .leftJoinAndSelect('form.properties', 'properties')
      .leftJoinAndSelect(`properties.${formType}`, formType)
      .leftJoinAndSelect('form.geometry', 'geometry')
      .leftJoinAndSelect('form.task', 'task')
      .where(`properties.${formType} IS NOT NULL`)
      .take(1000)
      .getMany();

    return forms;
  }




}