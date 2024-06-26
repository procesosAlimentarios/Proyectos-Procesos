import axios from "./axios";

export const agregarEquipoTaller =(data)=>axios.post("/equipos-taller", data)