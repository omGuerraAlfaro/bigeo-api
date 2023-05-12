import { Geometry } from 'src/models/geometry.models';
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

@Entity({ name: 'form' })
export class Form {
  @PrimaryGeneratedColumn()
  form_id: number;
  @Column()
  type: string;
  @Column({ nullable: true })
  image: string;
  @OneToOne(() => Properties, { cascade: true, eager: true })
  @JoinColumn()
  properties: Properties[];
  @OneToOne(() => Geometry, { cascade: true, eager: true })
  @JoinColumn()
  geometry: Geometry[];
}

@Entity({ name: 'properties' })
export class Properties {
  @PrimaryGeneratedColumn()
  propid: number;
  @Column()
  userId: string;
  @Column({ type: 'timestamp' })
  dateTime: Date;
  
  @OneToOne(() => FormSprinkler, { cascade: true, eager: true })
  @JoinColumn()
  formSprinkler: FormSprinkler[];

}

//   @OneToOne(() => FormDamage, { cascade: true, eager: true })
//   @JoinColumn()
//   formDamage: FormDamage[];

//   @OneToOne(() => FormHumidity, { cascade: true, eager: true })
//   @JoinColumn()
//   formHumidity: FormHumidity[];

//   @OneToOne(() => FormCompaction, { cascade: true, eager: true })
//   @JoinColumn()
//   formCompaction: FormCompaction[];

//   @OneToOne(() => FormFauna, { cascade: true, eager: true })
//   @JoinColumn()
//   formFauna: FormFauna[];

//   @OneToOne(() => FormCount, { cascade: true, eager: true })
//   @JoinColumn()
//   formCount: FormCount[];

//   @OneToOne(() => FormDiseases, { cascade: true, eager: true })
//   @JoinColumn()
//   formDiseases: FormDiseases[];

//   @OneToOne(() => FormGirdling, { cascade: true, eager: true })
//   @JoinColumn()
//   formGirdling: FormGirdling[];

//   @OneToOne(() => FormPlague, { cascade: true, eager: true })
//   @JoinColumn()
//   formPlague: FormPlague[];
// }


// @Entity({ name: 'formSprinkler' })
// export class FormSprinkler {
//   @PrimaryGeneratedColumn()
//   spid: number;
//   @Column()
//   spcode: string;
//   @Column({ nullable: true })
//   defect: string;
//   @Column({ nullable: true })
//   repaired: string;
//   @Column({ nullable: true })
//   observation: string;
// }
// @Entity({ name: 'formDamage' })
// export class FormDamage {
//   @PrimaryGeneratedColumn()
//   dmgid: number;
//   @Column({ nullable: true })
//   damage: string;
//   @Column({ nullable: true })
//   observation: string;
// }
// @Entity({ name: 'formHumidity' })
// export class FormHumidity {
//   @PrimaryGeneratedColumn()
//   hmdid: number;
//   @Column({ nullable: true })
//   moisture20: string;
//   @Column({ nullable: true })
//   moisture40: string;
//   @Column({ nullable: true })
//   moisture60: string;
//   @Column({ nullable: true })
//   roots: string;
//   @Column({ nullable: true })
//   observation: string;
// }

// @Entity({ name: 'formCompaction' })
// export class FormCompaction {
//   @PrimaryGeneratedColumn()
//   cptid: number;
//   @Column({ nullable: true })
//   pressure: string;
//   @Column({ nullable: true })
//   observation: string;
// }

// @Entity({ name: 'formFauna' })
// export class FormFauna {
//   @PrimaryGeneratedColumn()
//   fauid: number;
//   @Column({ nullable: true })
//   fauna: string;
//   @Column({ nullable: true })
//   quantity: number;
//   @Column({ nullable: true })
//   hint: string;
//   @Column({ nullable: true })
//   observation: string;
// }

// @Entity({ name: 'formCount' })
// export class FormCount {
//   @PrimaryGeneratedColumn()
//   cntid: number;
//   @Column({ nullable: true })
//   hasFruit: string;
//   @Column({ nullable: true })
//   observation: string;
// }

// @Entity({ name: 'formDiseases' })
// export class FormDiseases {
//   @PrimaryGeneratedColumn()
//   disid: number;
//   @Column({ nullable: true })
//   diseases: string;
//   @Column({ nullable: true })
//   level: string;
//   @Column({ nullable: true })
//   observation: string;
// }

// @Entity({ name: 'formGirdling' })
// export class FormGirdling {
//   @PrimaryGeneratedColumn()
//   girid: number;
//   @Column({ nullable: true })
//   administration: string;
//   @Column({ nullable: true })
//   area: string;
//   @Column({ nullable: true })
//   sector: string;
//   @Column({ nullable: true })
//   percent: string;
//   @Column({ nullable: true })
//   stuckGirdling: number;
//   @Column({ nullable: true })
//   deepGirdling: number;
//   @Column({ nullable: true })
//   heightGirdling: string;
//   @Column({ nullable: true })
//   markGirdling: string;
//   @Column({ nullable: true })
//   cantGirdling: string;
//   @Column({ nullable: true })
//   injectedTree: string;
//   @Column({ nullable: true })
//   observation: string;
// }

// @Entity({ name: 'formPlague' })
// export class FormPlague {
//   @PrimaryGeneratedColumn()
//   plid: number;
//   @Column({ nullable: true })
//   plague: string;
//   @Column({ nullable: true })
//   level: string;
//   @Column({ nullable: true })
//   population: string;
//   @Column({ nullable: true })
//   observation: string;
// }
