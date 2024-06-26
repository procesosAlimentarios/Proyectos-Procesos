import React from 'react'
import { useAuth } from '../context/auth-context'
import {Outlet, Navigate} from "react-router-dom"
const ProtectedRouterStudent = () => {
    const {auth,loading} = useAuth();
    if(!auth && !loading) return <Navigate to={"/"} replace/>
  return <Outlet/>
}

export default ProtectedRouterStudent