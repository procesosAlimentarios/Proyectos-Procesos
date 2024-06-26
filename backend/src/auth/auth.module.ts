import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Alumnos, AlumnosSchema } from 'src/alumnos/schemas/alumno-schema';
import { JwtModule } from '@nestjs/jwt';
import { Administrador, SchemaAdmin } from 'src/admin/schemas/admin-schema';

@Module({
  imports: [
    JwtModule.register({
      global: true,
      secret: "fhf fhslxo ahs",
      signOptions: { expiresIn: '1h' },
    }),
    MongooseModule.forFeature([
      { name: Alumnos.name, schema: AlumnosSchema },
      { name: Administrador.name, schema: SchemaAdmin },
    ]),
  ],
  controllers: [AuthController],
  providers: [AuthService],
})
export class AuthModule {}
