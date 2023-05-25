import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
//models
import { entities }  from './models';

//components
import { FormModule, UsersModule } from './components'
import { AuthModule } from './components/Auth/auth.module';


@Module({
  imports: [
    AuthModule,
    UsersModule,
    FormModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: '18.116.150.135',
      port: 5432,
      username: 'duoc2023team1',
      password: 'duoc2023',
      database: 'Aplicacion',
      entities,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
