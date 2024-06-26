import { ConflictException, HttpException, HttpStatus, Injectable, NotFoundException } from '@nestjs/common';
import { CreatePrestamosDto } from './dto/create-prestamos.dto';
import { AcceptRequest, ConfirmDeliver, ConfirmReturn, UpdatePracticaDto } from './dto/update-prestamos.dto';
import { Prestamos, Material } from './schema/prestamos-schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { MaterialesLab } from 'src/material-lab/schemas/material-lab-schema';
import { MaterialesAlmacen } from 'src/material-inventario/schema/material-almacen';
import { Aditivos } from 'src/aditivos/schemas/aditivo.schema';
import { PrestamosEntity } from './entities/prestamos.entity';
import { MaterialAlmacen, Aditivo, MaterialLab, EquiposLaboratorio, EquiposTallerInterface } from './interfaces/interfaces';
import { EquiposLab } from 'src/equipos-lab/schema/equipos-lab-schema';
import { EquiposTaller } from 'src/equipos-taller/schema/equipos-taller-schema';
@Injectable()
export class PrestamosService {
  constructor(
    @InjectModel(Prestamos.name) private prestamosModel: Model<Prestamos>,
    @InjectModel(MaterialesAlmacen.name) private materialesAlmacenModel: Model<MaterialAlmacen>,
    @InjectModel(MaterialesLab.name) private materialesLabModel: Model<MaterialLab>,
    @InjectModel(Aditivos.name) private aditivosModel: Model<Aditivo>,
    @InjectModel(EquiposLab.name) private equiposLabModel: Model<EquiposLaboratorio>,
    @InjectModel(EquiposTaller.name) private equiposTallerModel: Model<EquiposTallerInterface>,
  ) { }

  async create(createPrestamosDto: CreatePrestamosDto): Promise<Prestamos> {
    const { materiales } = createPrestamosDto;
    const materialesAlmacen = await this.materialesAlmacenModel.find();
    const materialesLab = await this.materialesLabModel.find();
    const aditivos = await this.aditivosModel.find();
    const equiposLab = await this.equiposLabModel.find();
    // Pendinete por agregar
    const equiposTaller = await this.equiposTallerModel.find();
    try {
      materiales.map((material: Material) => {
        equiposLab.map((equipo) => {
          if (equipo._id.toString() === material._id.toString()) {

            if (equipo.cantidad === 0) {
              throw new ConflictException("Lo sentimos, en este momento no contamos con unidades disponibles.");
            }

            if (equipo.cantidad < material.cantidad) {
              throw new ConflictException("La cantidad es mayor a las existencias del equipo de laboratorio.");
            }

          }
        });
        aditivos.map((aditivo) => {
          if (aditivo._id.toString() === material._id.toString()) {

            if (aditivo.cantidad === 0) {
              throw new ConflictException("Lo sentimos, en este momento no contamos con unidades disponibles.");
            }

            if (aditivo.cantidad < material.cantidad) {
              throw new ConflictException("La cantidad es mayor a las existencias del aditivo.");
            }

          }
        });

        materialesLab.map(matLab => {
          if (matLab.id.toString() === material._id.toString()) {

            if (matLab.existencias === 0) {
              throw new ConflictException("Lo sentimos, en este momento no contamos con unidades disponibles.");
            }

            if (matLab.existencias < material.cantidad) {
              throw new ConflictException("La cantidad es mayor a las existencias del material de laboratorio.");
            }

          }
        });

        materialesAlmacen.map(alm => {
          if (alm.id.toString() === material._id.toString()) {

            if (alm.existencias === 0) {
              throw new ConflictException("Lo sentimos, en este momento no contamos con unidades disponibles.");
            }

            if (alm.existencias < material.cantidad) {
              throw new ConflictException("La cantidad es mayor a las existencias del material de almacen.");
            }

          }
        })
      })
      return this.prestamosModel.create(createPrestamosDto);
    } catch (error) {
      if (error instanceof HttpException) {
        throw error;
      }
      throw new HttpException('Error interno del servidor', HttpStatus.INTERNAL_SERVER_ERROR);
    }

  };

  async acceptRequest(acceptData: AcceptRequest): Promise<Prestamos> {
    try {
      const materialesAlmacen = await this.materialesAlmacenModel.find();
      const materialesLab = await this.materialesLabModel.find();
      const aditivos = await this.aditivosModel.find();
      const prestamo = await this.prestamosModel.findById(acceptData.id);
      const equiposLab = await this.equiposLabModel.find();
      // Pendinete por agregar
      const equiposTaller = await this.equiposTallerModel.find();
      if (!prestamo) throw new NotFoundException("El prestamo no fue encontrado.");

      if (acceptData.aceptado) {
        prestamo.materiales.map((material: Material) => {
          equiposLab.map((equipo) => {
            if (equipo._id.toString() === material._id.toString()) {
              if (equipo.cantidad === 0) {
                throw new ConflictException(`Lo sentimos, en este momento no contamos con unidades disponibles de ${equipo.nombre}`);
              }

              if (equipo.cantidad < material.cantidad) {
                throw new ConflictException(`La cantidad es mayor a las existencias de ${equipo.nombre}`);
              }
            }
          });
          aditivos.map((aditivo) => {
            if (aditivo._id.toString() === material._id.toString()) {
              if (aditivo.cantidad === 0) {
                throw new ConflictException(`Lo sentimos, en este momento no contamos con unidades disponibles de ${aditivo.nombre}`);
              }

              if (aditivo.cantidad < material.cantidad) {
                throw new ConflictException(`La cantidad es mayor a las existencias de ${aditivo.nombre}`);
              }
            }
          });

          materialesLab.map(matLab => {
            if (matLab.id.toString() === material._id.toString()) {
              if (matLab.existencias >= material.cantidad) {
                if (matLab.existencias === 0) {
                  throw new ConflictException(`Lo sentimos, en este momento no contamos con unidades disponibles en ${matLab.nombre}`);
                }

                if (matLab.existencias < material.cantidad) {
                  throw new ConflictException(`La cantidad es mayor a las existencias en ${matLab.nombre}`);
                }
              }
            }
          });

          materialesAlmacen.map(alm => {
            if (alm.id.toString() === material._id.toString()) {
              if (alm.existencias >= material.cantidad) {
                if (alm.existencias === 0) {
                  throw new ConflictException(`Lo sentimos, en este momento no contamos con unidades disponibles en ${alm.nombre}`);
                }

                if (alm.existencias < material.cantidad) {
                  throw new ConflictException(`La cantidad es mayor a las existencias en ${alm.nombre}}`);
                }
              }
            }
          })
        });
        prestamo.materiales.map((material: Material) => {
          equiposLab.map((equipo) => {
            if (equipo._id.toString() === material._id.toString()) {
              if (equipo.cantidad >= material.cantidad) {
                const newQuantity = equipo.cantidad - material.cantidad;
                const updatedQuantity = async () => {
                  await this.equiposLabModel.findByIdAndUpdate(material._id, {
                    cantidad: newQuantity
                  });
                }
                updatedQuantity();
              }
            }
          });
          aditivos.map((aditivo) => {
            if (aditivo._id.toString() === material._id.toString()) {
              if (aditivo.cantidad >= material.cantidad) {
                const newQuantity = aditivo.cantidad - material.cantidad;
                const updatedQuantity = async () => {
                  await this.aditivosModel.findByIdAndUpdate(material._id, {
                    cantidad: newQuantity
                  });
                }
                updatedQuantity();
              }
            }
          });

          materialesLab.map(matLab => {
            if (matLab.id.toString() === material._id.toString()) {
              if (matLab.existencias >= material.cantidad) {
                const newQuantity = matLab.existencias - material.cantidad;
                const updatedQuantity = async () => {
                  await this.materialesLabModel.findByIdAndUpdate(material._id, { existencias: newQuantity });
                }
                updatedQuantity();
              }
            }
          });

          materialesAlmacen.map(alm => {
            if (alm.id.toString() === material._id.toString()) {
              if (alm.existencias >= material.cantidad) {
                const newQuantity = alm.existencias - material.cantidad;
                const updatedQuantity = async () => {
                  await this.materialesAlmacenModel.findByIdAndUpdate(material._id, { existencias: newQuantity });
                }
                updatedQuantity();
              }
            }
          })
        });
      };

      const prestamoWithField = await this.prestamosModel.find({
        _id: acceptData.id,
        aceptado: { $exists: true }
      });

      if (prestamoWithField) {
        const res = await this.prestamosModel.findByIdAndUpdate(acceptData.id, { aceptado: acceptData.aceptado }, { new: true })
        return res;
      }

      const res = await this.prestamosModel.findByIdAndUpdate(acceptData.id, { $set: { aceptado: acceptData.aceptado } }, { new: true });

      return res;
    } catch (error) {
      if (error instanceof HttpException) {
        throw error;
      }
      throw new HttpException("Error interno en el servidor", HttpStatus.INTERNAL_SERVER_ERROR);
    }

  }

  async confirmDeliver(confirmData: ConfirmDeliver) {
    return await this.prestamosModel.findByIdAndUpdate(confirmData.id, { entregado: confirmData.entregado }, { new: true });
  }

  async confirmReturn(confirmData: ConfirmReturn) {
    try {
      const materialesAlmacen = await this.materialesAlmacenModel.find();
      const materialesLab = await this.materialesLabModel.find();
      const aditivos = await this.aditivosModel.find();
      const prestamo = await this.prestamosModel.findById(confirmData.id);

      if (!prestamo) throw new NotFoundException("El prestamo no fue encontrado.");

      if (confirmData.devuelto) {
        prestamo.materiales.map((material: Material) => {
          aditivos.map((aditivo) => {
            if (aditivo._id.toString() === material._id.toString()) {
              const newQuantity = aditivo.cantidad + material.cantidad;
              const updatedQuantity = async () => {
                await this.aditivosModel.findByIdAndUpdate(material._id, {
                  cantidad: newQuantity
                });
              }
              updatedQuantity();
            }
          });

          materialesLab.map(matLab => {
            if (matLab.id.toString() === material._id.toString()) {
              const newQuantity = matLab.existencias + material.cantidad;
              const updatedQuantity = async () => {
                await this.materialesLabModel.findByIdAndUpdate(material._id, { existencias: newQuantity });
              }
              updatedQuantity();
            }
          });

          materialesAlmacen.map(alm => {
            if (alm.id.toString() === material._id.toString()) {
              const newQuantity = alm.existencias + material.cantidad;
              const updatedQuantity = async () => {
                await this.materialesAlmacenModel.findByIdAndUpdate(material._id, { existencias: newQuantity });
              }
              updatedQuantity();
            }
          })
        });
      }
      return await this.prestamosModel.findByIdAndUpdate(confirmData.id, { devuelto: confirmData.devuelto }, { new: true });
    } catch (error) {
      if (error instanceof HttpException) {
        throw error
      }
      throw new HttpException("Error interno en el servidor", HttpStatus.INTERNAL_SERVER_ERROR);
    }

  }

  async getNotReturn() {
    try {
      const materialesAlmacen = await this.materialesAlmacenModel.find().lean().exec() as MaterialAlmacen[];
      const materialesLab = await this.materialesLabModel.find().lean().exec() as MaterialLab[];
      const aditivos = await this.aditivosModel.find().lean().exec() as Aditivo[];
      const equiposLab = await this.equiposLabModel.find().lean().exec() as EquiposLaboratorio[];

      const practicas = await this.prestamosModel.find({ devuelto: false, aceptado: true, entregado: true })
        .populate('asignatura', 'nombre')
        .populate('profesor', 'nombre')
        .populate('alumno', 'nombre')
        .lean()
        .exec() as PrestamosEntity[];

      const practicasConMateriales = practicas.map(practica => {
        const materialesNew = practica.materiales.map((material: Material) => {
          const materialAlmacen = materialesAlmacen.find(mat => mat._id.toString() === material._id.toString());
          const materialLab = materialesLab.find(mat => mat._id.toString() === material._id.toString());
          const aditivo = aditivos.find(mat => mat._id.toString() === material._id.toString());
          const equipoLab = equiposLab.find(mat => mat._id.toString() === material._id.toString());
          const newMaterial = {
            nombre: materialAlmacen?.nombre || materialLab?.nombre || aditivo?.nombre || equipoLab.nombre,
            cantidad: material.cantidad
          };


          return newMaterial;

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

  async getNotDeliveries() {
    try {
      const materialesAlmacen = await this.materialesAlmacenModel.find().lean().exec() as MaterialAlmacen[];
      const materialesLab = await this.materialesLabModel.find().lean().exec() as MaterialLab[];
      const aditivos = await this.aditivosModel.find().lean().exec() as Aditivo[];
      const equiposLab = await this.equiposLabModel.find().lean().exec() as EquiposLaboratorio[];

      const practicas = await this.prestamosModel.find({ entregado: false, aceptado: true })
        .populate('asignatura', 'nombre')
        .populate('profesor', 'nombre')
        .populate('alumno', 'nombre')
        .lean()
        .exec() as PrestamosEntity[];

      const practicasConMateriales = practicas.map(practica => {
        const materialesNew = practica.materiales.map((material: Material) => {
          const materialAlmacen = materialesAlmacen.find(mat => mat._id.toString() === material._id.toString());
          const materialLab = materialesLab.find(mat => mat._id.toString() === material._id.toString());
          const aditivo = aditivos.find(mat => mat._id.toString() === material._id.toString());
          const equipoLab = equiposLab.find(mat => mat._id.toString() === material._id.toString());
          const newMaterial = {
            nombre: materialAlmacen?.nombre || materialLab?.nombre || aditivo?.nombre || equipoLab.nombre,
            cantidad: material.cantidad
          };


          return newMaterial;

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

  async getRequests() {
    try {
      const materialesAlmacen = await this.materialesAlmacenModel.find().lean().exec() as MaterialAlmacen[];
      const materialesLab = await this.materialesLabModel.find().lean().exec() as MaterialLab[];
      const aditivos = await this.aditivosModel.find().lean().exec() as Aditivo[];
      const equiposLab = await this.equiposLabModel.find().lean().exec() as EquiposLaboratorio[];

      const practicas = await this.prestamosModel.find({ aceptado: { $exists: false } })
        .populate('asignatura', 'nombre')
        .populate('profesor', 'nombre')
        .populate('alumno', 'nombre')
        .lean()
        .exec() as PrestamosEntity[];

      const practicasConMateriales = practicas.map(practica => {
        const materialesNew = practica.materiales.map((material: Material) => {
          const materialAlmacen = materialesAlmacen.find(mat => mat._id.toString() === material._id.toString());
          const materialLab = materialesLab.find(mat => mat._id.toString() === material._id.toString());
          const aditivo = aditivos.find(mat => mat._id.toString() === material._id.toString());
          const equipoLab = equiposLab.find(mat => mat._id.toString() === material._id.toString());
          const newMaterial = {
            nombre: materialAlmacen?.nombre || materialLab?.nombre || aditivo?.nombre || equipoLab.nombre,
            cantidad: material.cantidad
          };


          return newMaterial;

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

  async getRejectedRequests() {
    return await this.prestamosModel.find({ aceptado: false });
  }


  async findAll() {
    try {
      const materialesAlmacen = await this.materialesAlmacenModel.find().lean().exec() as MaterialAlmacen[];
      const materialesLab = await this.materialesLabModel.find().lean().exec() as MaterialLab[];
      const aditivos = await this.aditivosModel.find().lean().exec() as Aditivo[];
      const equiposLab = await this.equiposLabModel.find().lean().exec() as EquiposLaboratorio[];

      const practicas = await this.prestamosModel.find()
        .populate('asignatura', 'nombre')
        .populate('profesor', 'nombre')
        .populate('alumno', 'nombre')
        .lean()
        .exec() as PrestamosEntity[];

      const practicasConMateriales = practicas.map(practica => {
        const materialesNew = practica.materiales.map((material: Material) => {
          const materialAlmacen = materialesAlmacen.find(mat => mat._id.toString() === material._id.toString());
          const materialLab = materialesLab.find(mat => mat._id.toString() === material._id.toString());
          const aditivo = aditivos.find(mat => mat._id.toString() === material._id.toString());
          const equipoLab = equiposLab.find(mat => mat._id.toString() === material._id.toString());

          return materialAlmacen || materialLab || aditivo || equipoLab;
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
      const materialesAlmacen = await this.materialesAlmacenModel.find();
      const materialesLab = await this.materialesLabModel.find();
      const aditivos = await this.aditivosModel.find();
      const equiposLab = await this.equiposLabModel.find();

      const practicas = await this.prestamosModel.findById(id)
        .populate('asignatura', 'nombre')
        .populate('profesor', 'nombre')
        .populate('alumno', 'nombre cuatrimestre grupo')
        .lean()
        .exec() as PrestamosEntity;

      const materialesNew = practicas.materiales.map((material: Material) => {
        const materialAlmacen = materialesAlmacen.find(mat => mat._id.toString() === material._id.toString());
        const materialLab = materialesLab.find(mat => mat._id.toString() === material._id.toString());
        const aditivo = aditivos.find(mat => mat._id.toString() === material._id.toString());
        const equipoLab = equiposLab.find(mat => mat._id.toString() === material._id.toString());

        const newMaterial = {
          nombre: materialAlmacen?.nombre || materialLab?.nombre || aditivo?.nombre || equipoLab?.nombre,
          cantidad: material.cantidad
        };


        return newMaterial;
      }).filter(material => material !== undefined);


      return { ...practicas, materiales: materialesNew };
    } catch (error) {
      console.error('Error al buscar prácticas:', error);
      throw error;
    }
  }

  async update(id: string, updatePracticaDto: UpdatePracticaDto) {
    const res = await this.prestamosModel.findByIdAndUpdate(id, updatePracticaDto, { new: true });
    return res;
  }

  remove(id: string) {
    return this.prestamosModel.findByIdAndDelete(id);
  }


}
