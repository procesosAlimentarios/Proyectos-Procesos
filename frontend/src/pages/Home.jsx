import React from 'react'
import Input from '../components/Input'
import { styles } from '../assets/styles/global-styles'

const Home = () => {
  const {backegrounGreen} = styles;
  return (
    <div className='flex justify-center items-center h-full mt-20'>
      <div className="border-gray-200 border-[1px] p-10 shadow-sm">
        <div className="">
          <p className='text-xl font-bold'>Iniciar sesión</p>
          <p className='text-gray-400 font-semibold'>Ingresa tu usuario y contraseña para iniciar sesión.</p>
        </div>
        <div className="flex flex-col gap-5 my-10">
          <Input name={"Usuario"} type={"text"} placeholder={"Ingresa tu usuario"} />
          <Input name={"Contraseña"} type={"password"} placeholder={"Ingresa tu contraseña"} />
          <button style={{backgroundColor:backegrounGreen}} className='text-white p-2 rounded-sm font-semibold'>Iniciar Sesión</button>
        </div>
      </div>
    </div>
  )
}

export default Home