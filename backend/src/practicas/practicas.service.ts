import { Injectable } from '@nestjs/common';
import { CreatePracticaDto } from './dto/create-practica.dto';
import { UpdatePracticaDto } from './dto/update-practica.dto';
import { Practica } from './schema/practicas-schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { MaterialesLab } from 'src/material-lab/schemas/material-lab-schema';
import { MaterialesAlmacen } from 'src/material-inventario/schema/material-almacen';
import { Aditivos } from 'src/aditivos/schemas/aditivo.schema';
import { PracticaEntity } from './entities/practica.entity';
import { MaterialAlmacen, Aditivo, MaterialLab } from './interfaces/interfaces';

@Injectable()
export class PracticasService {
  constructor(
    @InjectModel(Practica.name) private practicasModel: Model<Practica>,
    @InjectModel(MaterialesAlmacen.name) private materialesAlmacenModel: Model<MaterialAlmacen>,
    @InjectModel(MaterialesLab.name) private materialesLabModel: Model<MaterialLab>,
    @InjectModel(Aditivos.name) private aditivosModel: Model<Aditivo>,
  ) { }

  async create(createPracticaDto: CreatePracticaDto): Promise<Practica> {
    return this.practicasModel.create(createPracticaDto);
  }

  async findAll() {
    try {
      const materialesAlmacen = await this.materialesAlmacenModel.find().lean().exec() as MaterialAlmacen[];
      const materialesLab = await this.materialesLabModel.find().lean().exec() as MaterialLab[];
      const aditivos = await this.aditivosModel.find().lean().exec() as Aditivo[];

      const practicas = await this.practicasModel.find()
        .populate('asignatura', 'nombre')
        .populate('profesor', 'nombre')
        .populate('alumno', 'nombre')
        .lean()
        .exec() as PracticaEntity[];

      const practicasConMateriales = practicas.map(practica => {
        const materialesNew = practica.materiales.map(id => {
          const materialAlmacen = materialesAlmacen.find(mat => mat._id.toString() === id.toString());
          const materialLab = materialesLab.find(mat => mat._id.toString() === id.toString());
          const aditivo = aditivos.find(mat => mat._id.toString() === id.toString());

          return materialAlmacen || materialLab || aditivo;
        }).filter(material => material !== undefined);

        return {
          ...practica,
          materiales: materialesNew
        };
      });

      return practicasConMateriales;
    } catch (error) {
      console.error('Error al buscar prácticas:', error);
      throw error;
    }
  }

  async findOne(id: string) {
    try {
      const materialesAlmacen = await this.materialesAlmacenModel.find().lean().exec() as MaterialAlmacen[];
      const materialesLab = await this.materialesLabModel.find().lean().exec() as MaterialLab[];
      const aditivos = await this.aditivosModel.find().lean().exec() as Aditivo[];

      const practicas = await this.practicasModel.findById(id)
        .populate('asignatura', 'nombre')
        .populate('profesor', 'nombre')
        .populate('alumno', 'nombre')
        .lean()
        .exec() as PracticaEntity;

      const materialesNew = practicas.materiales.map(id => {
        const materialAlmacen = materialesAlmacen.find(mat => mat._id.toString() === id.toString());
        const materialLab = materialesLab.find(mat => mat._id.toString() === id.toString());
        const aditivo = aditivos.find(mat => mat._id.toString() === id.toString());

        return materialAlmacen || materialLab || aditivo;
      }).filter(material => material !== undefined);


      return { ...practicas, materiales: materialesNew };
    } catch (error) {
      console.error('Error al buscar prácticas:', error);
      throw error;
    }
  }



  async update(id: string, updatePracticaDto: UpdatePracticaDto) {
    const res = await  this.practicasModel.findByIdAndUpdate(id, updatePracticaDto,{new:true});
    return res;
  }

  remove(id: string) {
    return this.practicasModel.findByIdAndDelete(id);
  }
}
