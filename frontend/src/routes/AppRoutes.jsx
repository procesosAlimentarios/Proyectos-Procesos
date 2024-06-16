import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'

import MaterialAditivos from '../pages/admin/MaterialAditivos'
import AgregarNuevoAditivo from '../pages/admin/AgregarNuevoAditivo'
import EditarAditivo from '../pages/admin/EditarAditivo'

import MaterialAlmacenAlimentos from '../pages/admin/MaterialAlmacenAlimentos'
import AgregarNuevoAlimento from '../pages/admin/AgregarNuevoAlimento'
import EditarAlimento from '../pages/admin/EditarAlimento'

import EquiposLaboratorio from '../pages/admin/EquiposLaboratorio'
import AgregarNuevoEquipo from '../pages/admin/AgregarNuevoEquipo'

import NotFound from '../pages/NotFound'
import Header from '../components/Header'

import MaterialLaboratorio from '../pages/admin/MaterialLaboratorio'
import AgregarNuevoMaterial from '../pages/admin/AgregarNuevoMaterial'

import TallerAlimentos from '../pages/admin/TallerAlimentos'
import AgregarNuevoEquipo2 from '../pages/admin/AgregarNuevoEquipo2'
import EditarEquipo from '../pages/admin/EditarEquipo'
import EditarEquipo2 from '../pages/admin/EditarEquipo2'
import EditarMaterial from '../pages/admin/EditarMaterial'

const AppRoutes = () => {
    return (
        <Router>
            <Header />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='*' element={<NotFound />} />

                <Route path='/MaterialAditivo' element={<MaterialAditivos />} />
                <Route path='/AgregarAditivo' element={<AgregarNuevoAditivo />} />
                <Route path='/EditarAditivo' element={<EditarAditivo />} />

                <Route path='/MaterialAlmacenAlimento' element={<MaterialAlmacenAlimentos/>}/>
                <Route path='/AgregarAlimento' element={<AgregarNuevoAlimento />} />
                <Route path='/EditarAlimento' element={<EditarAlimento />} />

                <Route path='/EquiposLaboratorio' element={<EquiposLaboratorio/>}/>
                <Route path='/AgregarEquipo' element={<AgregarNuevoEquipo />} />
                <Route path='/EditarEquipo' element={<EditarEquipo />} />

                <Route path='/MaterialLaboratorio' element={<MaterialLaboratorio/>}/>
                <Route path='/AgregarMaterial' element={<AgregarNuevoMaterial />} />
                <Route path='/EditarMaterial' element={<EditarMaterial />} />

                <Route path='/TallerAlimento' element={<TallerAlimentos/>}/>
                <Route path='/AgregarEquipo2' element={<AgregarNuevoEquipo2 />} />
                <Route path='/EditarEquipo2' element={<EditarEquipo2 />} />

            </Routes>
        </Router>
    )
}

export default AppRoutes