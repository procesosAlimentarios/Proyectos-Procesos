import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Types } from "mongoose";
import { Asignaturas } from "src/asignaturas/schemas/asignatura-schema";

@Schema({
    timestamps: true,
}) 
export class Profesores {
    @Prop({
        required: true,
        trim: true,
    })
    nombre: string;
    @Prop({
        type:Types.ObjectId,
        ref:Asignaturas.name,
        required: true,
    })
    materias:Types.ObjectId[];
}

export const ProfesoresSchema = SchemaFactory.createForClass(Profesores);