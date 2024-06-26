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
const AppRoutes = () => {
    const location = useLocation();
    const routesWithNavBarStudent = ["/inicio", "/cambiar-password","/solicitar-material"];
    const routesWithNavBarAdmin = ["/inicio-admin","/prestamos","/solicitudes","/entregas","/devoluciones","/aditivos","/alumnos"];
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
                    <Route>
                        <Route path='/inicio-admin' element={<WelcomeAdmin/>}/>
                        <Route path='/prestamos' element={<LoansList/>}/>
                        <Route path='/solicitudes' element={<Requests/>}/>
                        <Route path='/entregas' element={<Delivered/>}/>
                        <Route path='/devoluciones' element={<Returns/>}/>
                        <Route path='/aditivos' element={<Lista/>}/>
                        <Route path='/alumnos' element={<AlumnosLista/>}/>
                    </Route>
                    <Route path='/' element={<Home />} />
                    <Route path='*' element={<NotFound />} />
                </Routes>
            </div>
        </>
    )
}

export default AppRoutes;

