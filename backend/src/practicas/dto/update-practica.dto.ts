import { PartialType } from '@nestjs/mapped-types';
import { CreatePracticaDto } from './create-practica.dto';
import { IsOptional, IsString } from 'class-validator';

export class UpdatePracticaDto extends PartialType(CreatePracticaDto) {
    @IsString()
    @IsOptional()
    asignatura: string;

    @IsString()
    @IsOptional()
    profesor: string;

    @IsString()
    @IsOptional()
    alumno: string;

    @IsString()
    @IsOptional()
    nombrePractica: string;

    @IsOptional()
    fecha: Date;

    @IsString()
    @IsOptional()
    horaEntregaSolicitud: string;

    @IsString()
    @IsOptional()
    fechaMaterialRequerido: string;

    @IsString()
    @IsOptional()
    horaMaterialRequerido: string;

    @IsOptional()
    @IsString({ each: true })
    materiales: string[];
}
