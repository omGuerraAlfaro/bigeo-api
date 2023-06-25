import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';

// models
import { entities }  from './models';

// components
import { FormModule, UsersModule, AuthModule, TaskModule } from './components';


@Module({
  imports: [
    ConfigModule.forRoot(),
    FormModule,
    UsersModule,
    AuthModule,
    TaskModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST,
      port: Number(process.env.DB_PORT),
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      entities,
      extra: {
        connectionLimit: 5, 
        connectTimeout: 60000,
      },
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
