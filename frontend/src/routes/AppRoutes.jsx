import React from 'react'
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom'
import Home from '../pages/Home'
import NotFound from '../pages/NotFound'
import Header from '../components/Header'
import Welcome from '../pages/alumno/Welcome'
import NavBar from '../components/NavBar'
import ProtectedRouterStudent from '../utils/ProtectedRouterStudent'
import ChangePassword from '../pages/alumno/ChangePassword'
import RequestMaterials from '../pages/alumno/RequestMaterials'
import NavBarAdmin from '../components/NavBarAdmin'
import WelcomeAdmin from '../pages/admin/Welcome'
import LoansList from '../pages/admin/prestamos/LoansList'
import Requests from '../pages/admin/prestamos/Requests'
import Delivered from '../pages/admin/prestamos/Delivered'
import Returns from '../pages/admin/prestamos/Returns'
import Lista from '../pages/admin/aditivos/Lista'
import AlumnosLista from '../pages/admin/alumnos/AlumnosLista'
import Docentes from '../pages/admin/docentes/Docentes'
import Asignaturas from '../pages/admin/asignaturas/Asignaturas'
import MaterialesLab from '../pages/admin/materialeslab/MaterialesLab'
import MaterialesAlmacen from '../pages/admin/materialesalmacen/MaterialesAlmacen'
import AgregarAditivo from '../pages/admin/aditivos/AgregarAditivo'
import AgregarMaterialLab from '../pages/admin/materialeslab/AgregarMaterialLab'
import AgregarMaterialAlmacen from '../pages/admin/materialesalmacen/AgregarMaterialAlmacen'
import AgregarAsignatura from '../pages/admin/asignaturas/AgregarAsignaturas'
import AgregarDocente from '../pages/admin/docentes/AgregarDocentes'
import AgregarAlumno from '../pages/admin/alumnos/AgregarAlumno'
import EquiposTaller from '../pages/admin/equipos-taller/EquipoTaller'
import AgregarEquiposTaller from '../pages/admin/equipos-taller/AgregarEquiposTaller'
import EquiposLab from '../pages/admin/equiposlab/EquiposLab'
import AgregarEquipoLab from '../pages/admin/equiposlab/AgregarEquipoLab'
import ProtectedRouterAdmin from '../utils/ProtectedRouterAdmin'
const AppRoutes = () => {
    const location = useLocation();
    const routesWithNavBarStudent = ["/inicio", "/cambiar-password", "/solicitar-material"];
    const routesWithNavBarAdmin = ["/inicio-admin", "/prestamos", "/solicitudes", "/entregas", "/devoluciones", "/aditivos", "/alumnos", "/docentes", "/asignaturas", "/materialesLab", "/materialesAlmacen", "/agregar-aditivo", "/agregar-material-lab", "/agregar-material-alm", "/agregar-asignatura", "/agregar-docente", "/agregar-alumno","/equipos-taller","/agregar-equipo-taller","/equipos-lab","/agregar-equipo-lab"];
    return (
        <>
            <div className="fixed w-full z-50 top-0">
                <Header />
                {routesWithNavBarStudent.includes(location.pathname) && <NavBar />}
                {routesWithNavBarAdmin.includes(location.pathname) && <NavBarAdmin />}
            </div>
            <div className="mt-36">
                <Routes>
                    <Route element={<ProtectedRouterStudent />}>
                        <Route path='/inicio' element={<Welcome />} />
                        <Route path='/cambiar-password' element={<ChangePassword />} />
                        <Route path='/solicitar-material' element={<RequestMaterials />} />
                    </Route>
                    <Route element={<ProtectedRouterAdmin/>}>
                        <Route path='/inicio-admin' element={<WelcomeAdmin />} />
                        <Route path='/prestamos' element={<LoansList />} />
                        <Route path='/solicitudes' element={<Requests />} />
                        <Route path='/entregas' element={<Delivered />} />
                        <Route path='/devoluciones' element={<Returns />} />
                        <Route path='/aditivos' element={<Lista />} />
                        <Route path='/agregar-aditivo' element={<AgregarAditivo />} />
                        <Route path='/alumnos' element={<AlumnosLista />} />
                        <Route path='/agregar-alumno' element={<AgregarAlumno />} />
                        <Route path='/docentes' element={<Docentes />} />
                        <Route path='/agregar-docente' element={<AgregarDocente />} />
                        <Route path='/asignaturas' element={<Asignaturas />} />
                        <Route path='/agregar-asignatura' element={<AgregarAsignatura />} />
                        <Route path='/materialesLab' element={<MaterialesLab />} />
                        <Route path='/agregar-material-lab' element={<AgregarMaterialLab />} />
                        <Route path='/materialesAlmacen' element={<MaterialesAlmacen />} />
                        <Route path='/agregar-material-alm' element={<AgregarMaterialAlmacen />} />
                        <Route path='/equipos-taller' element={<EquiposTaller />} />
                        <Route path='/equipos-lab' element={<EquiposLab />} />
                        <Route path='/agregar-equipo-lab' element={<AgregarEquipoLab />} />
                        <Route path='/agregar-equipo-taller' element={<AgregarEquiposTaller />} />
                    </Route>
                    <Route path='/' element={<Home />} />
                    <Route path='*' element={<NotFound />} />
                </Routes>
            </div>
        </>
    )
}

export default AppRoutes;

