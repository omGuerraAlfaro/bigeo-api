import { Form } from 'src/models/form.model';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  OneToOne,
  PrimaryColumn,
  PrimaryGeneratedColumn,
} from 'typeorm';


@Entity({ name: 'geometry' })
export class Geometry {
  @PrimaryGeneratedColumn()
  gid: number;
  @Column()
  type: string;
  @Column('float', { array: true })
  coordinates: number[][];
  form: Form;
}