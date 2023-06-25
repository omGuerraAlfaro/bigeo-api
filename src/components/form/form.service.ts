import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
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
      .take(1000)
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
    const form = await this.formRepository.find({ where: { properties: { userId } }, relations: ['properties'] });
    return form;
  }


  //ok
  //For Date
  async findByDate(date: Date): Promise<Form[]> {
    const startOfDay = new Date(date.setUTCHours(0, 0, 0, 0));
    const endOfDay = new Date(date.setUTCHours(23, 59, 59, 999));

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
      .where(`properties.${formType} IS NOT NULL`)
      .getMany();

    return forms;
  }




}