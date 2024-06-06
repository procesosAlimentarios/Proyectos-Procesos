import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Home from '../pages/Home'

import MaterialAditivos from '../pages/admin/MaterialAditivos'
import AgregarNuevoAditivo from '../pages/admin/AgregarNuevoAditivo'
import EditarAditivo from '../pages/admin/EditarAditivo'

import AgregarNuevoAlimento from '../pages/admin/AgregarNuevoAlimento'
import EditarAlimento from '../pages/admin/EditarAlimento'

import NotFound from '../pages/NotFound'
import Header from '../components/Header'

const AppRoutes = () => {
    return (
        <Router>
            <Header/>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='*' element={<NotFound />} />

                <Route path='/MaterialAditivo' element={<MaterialAditivos/>}/>
                <Route path='/AgregarAditivo' element={<AgregarNuevoAditivo/>}/>  
                <Route path='/EditarAditivo' element={<EditarAditivo/>}/>

                <Route path='/AgregarAlimento' element={<AgregarNuevoAlimento/>}/>
                <Route path='/EditarAlimento' element={<EditarAlimento/>}/>

            </Routes>
        </Router>
    )
}

export default AppRoutes