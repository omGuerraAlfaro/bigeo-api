import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './components/user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Users } from './models/user.model';
import { Form } from './models/form.entity';
import { Geometry } from './models/track.models';


@Module({
  imports: [
    UsersModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: '18.116.150.135',
      port: 5432,
      username: 'duoc2023team1',
      password: 'duoc2023',
      database: 'Aplicacion',
      entities: [Users, Form, Geometry],
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
