export interface MaterialAlmacen {
    _id: string;
    nombre: string;
    existencias:number;
    noInventario:string;
    createdAt:Date;
    updatedAt:Date;
    // otras propiedades...
  }
  
 export interface MaterialLab {
    _id: string;
    nombre: string;
    existencias:number;
    createdAt:Date;
    updatedAt:Date;

    // otras propiedades...
  }
  
export interface Aditivo {
    _id: string;
    nombre: string;
    cantidad:number;
    createdAt:Date;
    updatedAt:Date;
    // otras propiedades...
  }
  
 export interface Practica {
    _id: string;
    materiales: string[];
    asignatura: string;
    profesor: string;
    alumno: string;
    nombrePractica:string;
    fecha:Date;
    horaEntregaSolicitud:string;
    fechaMaterialRequerido:string;
    horaMaterialRequerido:string;
    createdAt:Date;
    updatedAt:Date;
    // otras propiedades...
  }
  