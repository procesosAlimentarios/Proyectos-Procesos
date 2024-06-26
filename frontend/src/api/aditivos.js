import axios from "./axios";

export const agregarAditivo =(data)=>axios.post("/aditivos", data)
export const editarAditivo=(id,data)=> axios.post(`/aditivos/${id}`,data)