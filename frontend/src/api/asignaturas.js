import axios from "./axios";

const createAsignatura = (data) => axios.post("/asignaturas",data);

const getAllAsignaturas = () => axios.get("/asignaturas");

const getAsignaturaById = id => axios.get(`/asignaturas/${id}`);

const updateAsignatura = (id,data) => axios.patch(`/asignaturas/${id}`,data);

const deleteAsignatura = (id) => axios.delete(`/asignaturas/${id}`);