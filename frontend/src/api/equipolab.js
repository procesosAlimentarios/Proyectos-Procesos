import axios from "./axios";

export const agregarEquipolab =(data)=>axios.post("/equipos-lab", data)