import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Alumnos, AlumnosSchema } from 'src/alumnos/schemas/alumno-schema';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports:[
    JwtModule.register({
      global:true,
      secret:"fhf fhslxo ahs",
      signOptions: { expiresIn: '60m' },
    }),
    MongooseModule.forFeature([{name:Alumnos.name,schema:AlumnosSchema}])
  ],
  controllers: [AuthController],
  providers: [AuthService],
})
export class AuthModule {}
