import Input from "../../components/Input"
import { styles } from "../../assets/styles/global-styles"
import { hexToRgba } from "../../assets/styles/hexToRgba"

function AgregarNuevoAditivo() {
    const { backegrounGreen } = styles;
    const { backgroundRed } = styles;
    const backgroundColorWithTransparency = hexToRgba(styles.backgroundAgregar, 0.5); // 0.5 es la transparencia deseada

    return (
        <div className='flex justify-center items-center h-full mt-20'>
            <div className="border-orange-600 border-[5px] p-10 shadow-sm rounded-3xl" style={{ backgroundColor: backgroundColorWithTransparency }}>
                <div className="flex items-center justify-center">
                    <p className="text-xl font-bold text-black text-center">Agregar Nuevo Aditivo</p>
                </div>

                <div className="flex flex-col gap-4 my-10 paddin">
                    <div className="flex items-center justify-between ">
                        <p className='text-black w-32 font-semibold'>Nombre:</p>
                        <Input type={"text"} placeholder={"Nombre aditivo"} className="flex-grow" />
                    </div>
                    <div className="flex items-center justify-between">
                        <p className='text-black w-32 font-semibold'>Cantidad:</p>
                        <Input type={"password"} placeholder={"Cantidad aditivo"} className="flex-grow text-black" />
                    </div>
                    <div className="flex items-center justify-center gap-4">
                        <button style={{ backgroundColor: backgroundRed }} className='text-white rounded-md p-2 font-semibold w-32'>
                            Cancelar
                        </button>
                        <button style={{ backgroundColor: backegrounGreen }} className='text-white rounded-md p-2 font-semibold w-32'>
                            Agregar
                        </button>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default AgregarNuevoAditivo