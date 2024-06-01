import { HttpException, HttpStatus, Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Alumnos } from 'src/alumnos/schemas/alumno-schema';
import { LoginDto } from './dto/login-dto';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
    constructor(@InjectModel(Alumnos.name) private alumnosModel: Model<Alumnos>, private jwtSvc:JwtService) { }

    async login(loginDto: LoginDto) {
        try {

            const user = await this.alumnosModel.findOne({ matricula: loginDto.username });

            const {password,...rest} = user.toObject(); 

            if (!user) throw new NotFoundException("El usuario no se encutra registrado.");
            
            if (user.password === loginDto.password) return rest;

            const isPasswordValis = await bcrypt.compare(loginDto.password, user.password);

            if (!isPasswordValis) throw new HttpException("La contraseña es incorrecta.", HttpStatus.UNAUTHORIZED);

            return rest;

        } catch (error) {
            console.log(error);
        }
    }
}
