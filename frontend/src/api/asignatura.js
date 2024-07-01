import axios from "./axios";
export const agregarAsignatura =(data)=>axios.post("/asignaturas", data)