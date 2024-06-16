import { IsNotEmpty, IsNumber, IsString, MaxLength, MinLength,Min, Max } from "class-validator";

export class CreateMaterialLabDto {
    @IsNotEmpty()
    @IsString()
    @MaxLength(40)
    @MinLength(3)
    nombre: string;

    @IsNotEmpty()
    @IsNumber()
    @Min(1)
    @Max(50)
    existencias: number;
}
