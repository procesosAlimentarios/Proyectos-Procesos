import { Module } from '@nestjs/common';
import { AlumnosService } from './alumnos.service';
import { AlumnosController } from './alumnos.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Alumnos, AlumnosSchema } from './schemas/alumno-schema';
import { AuthModule } from 'src/auth/auth.module';
import { AuthController } from 'src/auth/auth.controller';
import { AuthService } from 'src/auth/auth.service';

@Module({
  imports:[AuthModule,MongooseModule.forFeature([{name:Alumnos.name,schema:AlumnosSchema}])],
  controllers: [AlumnosController,AuthController],
  providers: [AlumnosService,AuthService],
})
export class AlumnosModule {}
