import { PartialType } from '@nestjs/mapped-types';
import { CreateEquiposTallerDto } from './create-equipos-taller.dto';
import { IsOptional, IsString } from 'class-validator';

export class UpdateEquiposTallerDto extends PartialType(CreateEquiposTallerDto) {
    @IsString()
    @IsOptional()
    nombre: string;

    @IsString()
    @IsOptional()
    noInventario: string;

    @IsString()
    @IsOptional()
    estado: string;
}
