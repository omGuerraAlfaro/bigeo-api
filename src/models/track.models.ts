import { Form, FormDamage, FormSprinkler } from 'src/models/form.models';
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

@Entity({ name: 'track' })
export class Track {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  type: string;

  @OneToOne(() => Geometry, { cascade: true, eager: true })
  @JoinColumn()
  geometry: Geometry[];

  @Column()
  userId: string;
  @Column({ type: 'timestamp' })
  dateTime: Date;
  @Column()
  timeElapsed: string;
  @Column()
  distance: number;
  @Column({ array: true })
  rawData: string;
}
@Entity({ name: 'geometry' })
export class Geometry {
  @PrimaryGeneratedColumn()
  gid: number;
  @Column()
  type: string;
  @Column('float', { array: true })
  coordinates: number[][];
  track: Track;
  form: Form;
}