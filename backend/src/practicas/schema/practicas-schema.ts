import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose, { Document, Types } from "mongoose";
import { Alumnos } from "src/alumnos/schemas/alumno-schema";
import { Asignaturas } from "src/asignaturas/schemas/asignatura-schema";
import { Profesores } from "src/profesores/schemas/profesores-schema";

@Schema({
    timestamps: true,
})
export class Practica {
    @Prop({
        required: true,
        type: Types.ObjectId,
        ref: Asignaturas.name, 
    })
    asignatura: Types.ObjectId;

    @Prop({
        required: true,
        type: Types.ObjectId,
        ref: Profesores.name, 
    })
    profesor: Types.ObjectId;

    @Prop({
        required: true,
        type: Types.ObjectId,
        ref: Alumnos.name, 
    })
    alumno: Types.ObjectId;

    @Prop({
        required: true,
        trim: true,
    })
    nombrePractica: string;

    @Prop({
        trim: true,
        default: new Date(),
    })
    fecha: Date;

    @Prop({
        required: true,
        trim: true,
    })
    horaEntregaSolicitud: string;

    @Prop({
        required: true,
        trim: true,
    })
    fechaMaterialRequerido: string;

    @Prop({
        required: true,
        trim: true,
    })
    horaMaterialRequerido: string;

    @Prop({
        required: true,
      })
      materiales:string[]; 
}

export const PracticaSchema = SchemaFactory.createForClass(Practica);

