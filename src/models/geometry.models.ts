import { Form } from 'src/models/form.models';
import { Track } from 'src/models/track.models';
import {
    Column,
    Entity,
    JoinColumn,
    ManyToOne,
    OneToMany,
    OneToOne,
    //PrimaryColumn,
    PrimaryGeneratedColumn,
} from 'typeorm';

@Entity({ name: 'geometry' })
export class Geometry {
    @PrimaryGeneratedColumn()
    gid: number;
    @Column()
    type: string;
    @Column('float', { array: true })
    coordinates: number[];

    @ManyToOne(() => Track, (track) => track)
    @JoinColumn()
    track: Track;

    @OneToOne(() => Form, { cascade: true, eager: true })
    @JoinColumn()
    form: Form[];
}