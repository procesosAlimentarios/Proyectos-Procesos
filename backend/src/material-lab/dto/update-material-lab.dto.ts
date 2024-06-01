import { PartialType } from '@nestjs/mapped-types';
import { CreateMaterialLabDto } from './create-material-lab.dto';
import {  IsNumber, IsOptional, IsString } from 'class-validator';

export class UpdateMaterialLabDto extends PartialType(CreateMaterialLabDto) {
    @IsString()
    @IsOptional()
    nombre: string;

    @IsNumber()
    @IsOptional()
    existencias:number;
}
