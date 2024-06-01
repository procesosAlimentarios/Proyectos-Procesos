import { IsNotEmpty, IsNumber, IsString, MaxLength, MinLength } from "class-validator";

export class CreateMaterialLabDto {
    @IsNotEmpty()
    @IsString()
    @MaxLength(40)
    @MinLength(3)
    nombre: string;

    @IsNotEmpty()
    @IsNumber()
    existencias:number;
}
