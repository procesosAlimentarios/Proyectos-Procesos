import { Module } from '@nestjs/common';
import { PracticasService } from './practicas.service';
import { PracticasController } from './practicas.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Practica, PracticaSchema } from './schema/practicas-schema';
import { Aditivos, AditivosSchema } from 'src/aditivos/schemas/aditivo.schema';
import { MaterialesLab, MaterialesLabSchema } from 'src/material-lab/schemas/material-lab-schema';
import { MaterialesAlmacenSchema,MaterialesAlmacen } from 'src/material-inventario/schema/material-almacen';

@Module({
  imports: [MongooseModule.forFeature([
    { name: Practica.name, schema: PracticaSchema },
    { name: Aditivos.name, schema: AditivosSchema },
    { name: MaterialesLab.name, schema: MaterialesLabSchema },
    { name: MaterialesAlmacen.name, schema: MaterialesAlmacenSchema },
   
  ]
  )],
  controllers: [PracticasController],
  providers: [PracticasService],
})
export class PracticasModule { }
