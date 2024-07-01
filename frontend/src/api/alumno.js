import axios from "./axios";

export const agregarAlumno =(data)=>axios.post("/alumnos", data)