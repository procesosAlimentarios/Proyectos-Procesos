import { Module } from '@nestjs/common';
import { AlumnosService } from './alumnos.service';
import { AlumnosController } from './alumnos.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Alumnos, AlumnosSchema } from './schemas/alumno-schema';
import { AuthModule } from 'src/auth/auth.module';
import { AuthController } from 'src/auth/auth.controller';
import { AuthService } from 'src/auth/auth.service';
import { AdminModule } from 'src/admin/admin.module';
import { AdminController } from 'src/admin/admin.controller';
import { AdminService } from 'src/admin/admin.service';

@Module({
  imports:[AuthModule,AdminModule,MongooseModule.forFeature([{name:Alumnos.name,schema:AlumnosSchema}])],
  controllers: [AlumnosController,AuthController,AdminController],
  providers: [AlumnosService,AuthService,AdminService],
  exports:[MongooseModule]
})
export class AlumnosModule {}
