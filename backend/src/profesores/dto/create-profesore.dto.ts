import { IsMongoId, IsNotEmpty, IsString, MaxLength, MinLength } from "class-validator";
import  { Types } from "mongoose";

export class CreateProfesoreDto {
    @IsString()
    @IsNotEmpty()
    @MinLength(3)
    @MaxLength(40)
    nombre: string;

    @IsNotEmpty()
    @IsMongoId({each:true})
    materias:Types.ObjectId[];
}
