import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { AsignaturasModule } from './asignaturas/asignaturas.module';
import { ProfesoresModule } from './profesores/profesores.module';
import { AlumnosModule } from './alumnos/alumnos.module';
import { MaterialLabModule } from './material-lab/material-lab.module';
import { MaterialInventarioModule } from './material-inventario/material-inventario.module';
import { AditivosModule } from './aditivos/aditivos.module';
import { EquiposTallerModule } from './equipos-taller/equipos-taller.module';
import { EquiposLabModule } from './equipos-lab/equipos-lab.module';
import { PracticasModule } from './practicas/practicas.module';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot(process.env.MONGODB_URI), AsignaturasModule, ProfesoresModule, AlumnosModule, MaterialLabModule, MaterialInventarioModule, AditivosModule, EquiposTallerModule, EquiposLabModule, PracticasModule, AuthModule],
  controllers: [],
  providers: [AppService],
})
export class AppModule { }
