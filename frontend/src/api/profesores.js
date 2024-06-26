import axios from "./axios";

const getAllProfesores = () => axios.get("/profesores");

const createProfesor = (data) => axios.post("/profesores",data);

const getProfesorById = (id) => axios.get(`/profesores/${id}`);

const updateProfesor = (id,data) => axios.patch(`/profesores/${id}`,data);

const deleteProfesor = (id) => axios.delete(`/profesores/${id}`);