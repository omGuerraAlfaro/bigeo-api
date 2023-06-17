import { Users } from 'src/models/user.model';
import {
    Form, FormCompaction, FormCount, FormDamage, FormDiseases,
    FormFauna, FormGirdling, FormHumidity, FormPlague,
    FormSprinkler, Properties
} from 'src/models/form.model';
import { Geometry, Track } from 'src/models/track.model';
import { Task } from './task.model';

export const entities = [ Users, Form, FormCompaction, FormCount, FormDamage, FormDiseases,
    FormFauna, FormGirdling, FormHumidity, FormPlague,
    FormSprinkler, Properties, Geometry, Track, Task];

