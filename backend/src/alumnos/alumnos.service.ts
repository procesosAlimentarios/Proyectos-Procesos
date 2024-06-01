import { Injectable } from '@nestjs/common';
import { CreateAlumnoDto } from './dto/create-alumno.dto';
import { UpdateAlumnoDto } from './dto/update-alumno.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Alumnos } from './schemas/alumno-schema';
import { Model } from 'mongoose';
import * as bcrypt from 'bcrypt';
@Injectable()
export class AlumnosService {
  constructor(@InjectModel(Alumnos.name) private alusmosModel: Model<Alumnos>) { }
  async create(createAlumnoDto: CreateAlumnoDto) {
    const hasedPassword = await bcrypt.hash(createAlumnoDto.password,10);
    const res = new this.alusmosModel(
      {
        ...createAlumnoDto,
        password:hasedPassword,
      }
    );
    
    await res.save();
    return res;
  }

  findAll() {
    return this.alusmosModel.find();
  }

  findOne(id: string) {
    return this.alusmosModel.findById(id);
  }

  update(id: string, updateAlumnoDto: UpdateAlumnoDto) {
    return this.alusmosModel.findByIdAndUpdate(id, updateAlumnoDto,{new:true});
  }

  remove(id: string) {
    return this.alusmosModel.findByIdAndDelete(id);
  }
}
