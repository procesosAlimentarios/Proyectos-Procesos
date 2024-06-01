import { IsDate, IsMongoId, IsNotEmpty, IsOptional, IsString, MaxLength, MinLength } from "class-validator";
import { Types } from "mongoose";

export class CreatePracticaDto {
    @IsString()
    @IsNotEmpty()
    @MinLength(2)
    @MaxLength(60)
    asignatura:string;

    @IsString()
    @IsNotEmpty()
    @MinLength(2)
    @MaxLength(60)
    profesor: string;

    @IsString()
    @IsNotEmpty()
    @MinLength(2)
    @MaxLength(60)
    alumno: string;

    @IsString()
    @IsNotEmpty()
    @MinLength(2)
    @MaxLength(60)
    nombrePractica:string;

    @IsOptional()
    fecha:Date;

    @IsString()
    @IsNotEmpty()
    @MinLength(8)
    @MaxLength(8)
    horaEntregaSolicitud:string;

    @IsString()
    @IsNotEmpty()
    @MinLength(10)
    @MaxLength(10)
    fechaMaterialRequerido:string;

    @IsString()
    @IsNotEmpty()
    @MinLength(8)
    @MaxLength(8)
    horaMaterialRequerido:string;

    @IsNotEmpty()
    @IsString({each:true})
    materiales:string[];
}
