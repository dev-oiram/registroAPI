require('dotenv').config(); // Variables de entorno

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ClientesController } from './clientes/clientes.controller';
import { LogsController } from './logs.controller'
import { Clientes } from 'src/clientes.entity';
import { DatosContacto } from 'src/datos-contacto.entity';
import { Claves } from 'src/claves.entity';
import { Logs } from 'src/logs.entity';
import * as cors from 'cors';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      // Base de Datos
      type: 'postgres',
      host: process.env.DB_HOST,
      port: 5432, // Convert to number
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_DATABASE,
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
    }),
    TypeOrmModule.forFeature([Clientes, DatosContacto, Claves, Logs]),
  ],
  controllers: [ClientesController, LogsController],
})
export class AppModule {
  configure(consumer) {
    consumer.apply(cors()).forRoutes('*');
  }
}
