import axios from "./axios";

export const agregarMatLab =(data)=>axios.post("/material-lab", data)