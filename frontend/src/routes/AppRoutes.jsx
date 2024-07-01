import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import Home from '../pages/Home'
import NotFound from '../pages/NotFound'
import Header from '../components/Header'

import AgregarAditivo from '../pages/admin/Aditivo/AgregarAditivo'
import EditarAditivo from '../pages/admin/Aditivo/EditarAditivo'
import MaterialAditivos from '../pages/admin/Aditivo/MaterialAditivos'

import AgregarAlimento from '../pages/admin/Alimento/AgregarAlimento'
import EditarAlimento from '../pages/admin/Alimento/EditarAlimento'
import MaterialAlimentos from '../pages/admin/Alimento/MaterialAlimentos'

import AgregarEquipoLab from '../pages/admin/EquipoLab/AgregarEquipoLab'
import EditarEquipoLab from '../pages/admin/EquipoLab/EditarEquipoLab'
import EquiposLab from '../pages/admin/EquipoLab/EquiposLab'

import AgregarEquipoTaller from '../pages/admin/EquipoTaller/AgregarEquipoTaller'
import EditarEquipoTaller from '../pages/admin/EquipoTaller/EditarEquipoTaller'
import TallerAlimentos from '../pages/admin/EquipoTaller/TallerAlimentos'

import AgregarMaterialLab from '../pages/admin/MaterialLab/AgregarMaterialLab'
import EditarMaterialLab from '../pages/admin/MaterialLab/EditarMaterialLab'
import MaterialLab from '../pages/admin/MaterialLab/MaterialLab'

import AgregarAlumno from '../pages/admin/Alumno/AgregarAlumno'
import EditarAlumno from '../pages/admin/Alumno/EditarAlumno'

import AgregarDocente from '../pages/admin/Docente/AgregarDocente'
import EditarDocente from '../pages/admin/Docente/EditarDocente'

import AgregarAsignatura from '../pages/admin/Asignatura/AgregarAsignatura'

const AppRoutes = () => {
    return (
        <Router>
            <Header />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='*' element={<NotFound />} />

                <Route path='/AgregarAditivo' element={<AgregarAditivo/>}/>
                <Route path='/EditarAditivo' element={<EditarAditivo/>}/>
                <Route path='/MaterialAditivo' element={<MaterialAditivos/>}/>

                <Route path='/AgregarAlimento' element={<AgregarAlimento/>}/>
                <Route path='/EditarAlimento' element={<EditarAlimento/>}/>
                <Route path='/MaterialAlimentos' element={<MaterialAlimentos/>}/>

                <Route path='/AgregarEquipoLab' element={<AgregarEquipoLab/>}/>
                <Route path='/EditarEquipoLab' element={<EditarEquipoLab/>}/>
                <Route path='/EquiposLab' element={<EquiposLab/>}/>

                <Route path='/AgregarEquipoTaller' element={<AgregarEquipoTaller/>}/>
                <Route path='/EditarEquipoTaller' element={<EditarEquipoTaller/>}/>
                <Route path='/TallerAlimentos' element={<TallerAlimentos/>}/>

                <Route path='/AgregarMaterialLab' element={<AgregarMaterialLab/>}/>
                <Route path='/EditarMaterialLab' element={<EditarMaterialLab/>}/>
                <Route path='/MaterialLab' element={<MaterialLab/>}/>

                <Route path='/AgregarAlumno' element={<AgregarAlumno/>}/>
                <Route path='/EditarAlumno' element={<EditarAlumno/>}/>

                <Route path='/AgregarDocente' element={<AgregarDocente/>}/>
                <Route path='/EditarDocente' element={<EditarDocente/>}/>

                <Route path='/AgregarAsignatura' element={<AgregarAsignatura/>}/>
              
            </Routes>
        </Router>
    )
}

export default AppRoutes