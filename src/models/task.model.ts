import {
  Column,
  Entity,
  JoinColumn,
  //ManyToOne,
  //OneToMany,
  OneToOne,
  //PrimaryColumn,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity({ name: 'task' })
export class Task {
  @PrimaryGeneratedColumn()
  task_id: number;

  @Column({ type: 'timestamp' })
  dateTime: Date;

  @Column({ type: 'timestamp' })
  dateTimeLimit: Date;

  @Column({ nullable: true })
  status: string;

  @Column({ nullable: true })
  assigned_user: string;

  @Column({ array: true })
  assigned_form: string;

  @Column({ nullable: true })
  observation: string;

  @Column({ nullable: true })
  priority: string;
}
