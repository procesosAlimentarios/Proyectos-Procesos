import { PartialType } from '@nestjs/mapped-types';
import { CreateEquiposLabDto } from './create-equipos-lab.dto';
import { IsNumber, IsOptional, IsString } from 'class-validator';

export class UpdateEquiposLabDto extends PartialType(CreateEquiposLabDto) {
    @IsString()
    @IsOptional()
    nombre: string;

    @IsString()
    @IsOptional()
    noInventario: string;

    @IsNumber()
    @IsOptional()
    cantidad: number;
}
