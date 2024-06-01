import React from 'react'
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Home from '../pages/Home'
import NotFound from '../pages/NotFound'
import Header from '../components/Header'
const AppRoutes = () => {
    return (
        <Router>
            <Header/>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='*' element={<NotFound />} />
            </Routes>
        </Router>
    )
}

export default AppRoutes