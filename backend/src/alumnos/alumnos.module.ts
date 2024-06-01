import { Module } from '@nestjs/common';
import { AlumnosService } from './alumnos.service';
import { AlumnosController } from './alumnos.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Alumnos, AlumnosSchema } from './schemas/alumno-schema';

@Module({
  imports:[MongooseModule.forFeature([{name:Alumnos.name,schema:AlumnosSchema}])],
  controllers: [AlumnosController],
  providers: [AlumnosService],
})
export class AlumnosModule {}
