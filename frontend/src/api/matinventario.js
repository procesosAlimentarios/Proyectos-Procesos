//material de inventario
import axios from "./axios";

export const agregarAlimento =(data)=>axios.post("/material-inventario", data)