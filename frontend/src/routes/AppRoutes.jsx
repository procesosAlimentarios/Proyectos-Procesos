import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Home from '../pages/Home'
import AgregarNuevoAditivo from '../pages/admin/AgregarNuevoAditivo'
import EditarAditivo from '../pages/admin/EditarAditivo'
import Prueba from '../pages/Prueba'
import NotFound from '../pages/NotFound'
import Header from '../components/Header'

const AppRoutes = () => {
    return (
        <Router>
            <Header/>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='*' element={<NotFound />} />
                <Route path='/Prueba' element={<Prueba/>}/>
                <Route path='/AgregarNuevoAditivo' element={<AgregarNuevoAditivo/>}/>  
                <Route path='/EditarAditivo' element={<EditarAditivo/>}/>
            </Routes>
        </Router>
    )
}

export default AppRoutes