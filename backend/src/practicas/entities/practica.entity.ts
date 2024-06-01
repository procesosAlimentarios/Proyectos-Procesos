import { Types } from "mongoose";

export class PracticaEntity {
    asignatura: Types.ObjectId;
    profesor: Types.ObjectId;
    alumno: Types.ObjectId;
    nombrePractica:string;
    fecha:Date;
    horaEntregaSolicitud:string;
    fechaMaterialRequerido:string;
    horaMaterialRequerido:string;
    materiales:string[];
};
