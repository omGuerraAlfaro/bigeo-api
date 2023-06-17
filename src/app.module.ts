import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';

// models
import { entities }  from './models';

// components
import { FormModule, UsersModule, AuthModule, TrackModule, TaskModule } from './components';


@Module({
  imports: [
    ConfigModule.forRoot(),
    FormModule,
    UsersModule,
    AuthModule,
    TrackModule,
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
        connectionLimit: 5, // Set the number of connections to be made simultaneously. Adjust based on your application's requirements.
        connectTimeout: 60000, // Set the time, in milliseconds, before a connection attempt is aborted.
      },
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
