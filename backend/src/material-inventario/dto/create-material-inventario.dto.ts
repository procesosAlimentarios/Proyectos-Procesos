import { IsNotEmpty, IsNumber, IsString, Max, MaxLength, Min, MinLength } from "class-validator";

export class CreateMaterialInventarioDto {
    @IsString()
    @IsNotEmpty()
    @MinLength(3)
    @MaxLength(40)
    nombre:string;

    @IsNotEmpty()
    @IsNumber()
    @Min(0)
    @Max(100)
    existencias:number;

    @IsString()
    @IsNotEmpty()
    @MinLength(3)
    @MaxLength(20)
    noInventario:string;
}
