import Input from '../components/Input'
import { styles } from '../assets/styles/global-styles'
import { hexToRgba } from '../assets/styles/hexToRgba';

const Home = () => {
  const { backegrounGreen } = styles;
  const backgroundColorWithTransparency = hexToRgba(styles.backgroundHome, 0.0); // 0.5 es la transparencia deseada
  return (
    <div className='flex justify-center items-center h-full mt-20'>
      <div className="border-green-600 border-[5px] p-10 shadow-sm rounded-3xl" style={{ backgroundColor: backgroundColorWithTransparency }}>
        <div className="">
          <p className='text-xl font-bold text-black'>Iniciar sesión</p>
          <p className='font-semibold text-black'>Ingresa tu usuario y contraseña para iniciar sesión.</p>
        </div>
        <div className="flex flex-col gap-5 my-10 paddin">
          <p className='text-black'>Usuario:</p>
          <Input type={"text"} placeholder={"Ingresa tu usuario"} />
          <p className='text-black'>Contraseña:</p>
          <Input type={"password"} placeholder={"Ingresa tu contraseña"} className="text-black" />
          <button style={{ backgroundColor: backegrounGreen }} className='text-white p-2 rounded-sm font-semibold'>Iniciar Sesión</button>
        </div>
      </div>
    </div>
  )
}

export default Home