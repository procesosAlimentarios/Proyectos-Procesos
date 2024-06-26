import { styles } from "../../../assets/styles/global-styles"
import { hexToRgba } from "../../../assets/styles/hexToRgba"
import { useForm } from "react-hook-form";
import { Input } from "@nextui-org/react";
import { agregarEquipolab } from "../../../api/equipolab";
import { Toaster,toast } from "sonner";

//create-equipos-lab.dto

function AgregarEquipoLab() {
    const { backegrounGreen } = styles;
    const { backgroundRed } = styles;
    const backgroundColorWithTransparency = hexToRgba(styles.backgroundAgregar, 0.0); // 0.5 es la transparencia deseada
    const { register, formState: { errors }, handleSubmit, watch } = useForm();

    const onSubmit = handleSubmit(async (values) => {
        try {
            console.log(values)
            const data ={
                ...values,
                cantidad: parseInt(values.cantidad)
            }
            const res = await agregarEquipolab(data);
            if(res){
                toast.success("El equipo de lab se agrego.");
            }
        }
        catch (error) {

        }
    });
    return (

        <div className='flex justify-center items-center h-full mt-20'>
             <Toaster richColors/>
            <div className="border-green-600 border-[5px] p-10 shadow-sm rounded-3xl" style={{ backgroundColor: backgroundColorWithTransparency }}>
                <div className="flex items-center justify-center">
                    <p className="text-xl font-bold text-black text-center">Agregar Nuevo Equipo de Laboratorio</p>
                </div>

                <form onSubmit={onSubmit} className="flex flex-col gap-4 my-10 paddin">
                    <div className="flex items-center justify-between ">
                        <p className='text-black w-32 font-semibold'>Nombre:</p>
                        <Input
                            label="Nombre Equipo"
                            variant="bordered"
                            isInvalid={errors?.nombre ? true : false}
                            errorMessage={errors?.nombre?.message}
                            {
                            ...register("nombre", {
                                required: "El nombre es requerido",
                                minLength: {
                                    value: 3,
                                    message: "El nombre debe contener al menos 3 caracteres",
                                },
                                maxLength: {
                                    value: 40,
                                    message: "El nombre debe de contener la menos 40 caracteres"
                                }
                            })
                            } />
                    </div>
                    <div className="flex items-center justify-between">
                        <p className='text-black w-32 font-semibold'>N° Inventario:</p>
                        <Input
                            label="N° Inventario"
                            variant="bordered"
                            isInvalid={errors?.noInventario ? true : false}
                            errorMessage={errors?.noInventario?.message}
                            {
                            ...register("noInventario", {
                                required: "El N° inventario es requerido",
                                minLength: {
                                    value: 1,
                                    message: "El nombre debe contener al menos 1 caractere",
                                },
                                maxLength: {
                                    value: 20,
                                    message: "El nombre debe de contener la menos 20 caracteres"
                                }
                            })
                            } />
                    </div>
                    <div className="flex items-center justify-between">
                        <p className='text-black w-32 font-semibold'>Cantidad:</p>
                        <Input
                            label="Cantidad Equipo"
                            variant="bordered"
                            isInvalid={errors?.cantidad ? true : false}
                            type="number"
                            errorMessage={errors?.cantidad?.message}
                            {
                            ...register("cantidad", {
                                required: "La cantidad es requerida",
                                min: {
                                    value: 1,
                                    message: "La minima cantidad es de 1",
                                },
                                max: {
                                    value: 100,
                                    message: "La cantidad maxima es 100"
                                }
                            })
                            } />
                    </div>
                    <div className="flex items-center justify-center gap-4">
                        <button style={{ backgroundColor: backgroundRed }} className='text-white rounded-md p-2 font-semibold w-32'>
                            Cancelar
                        </button>
                        <button style={{ backgroundColor: backegrounGreen }} className='text-white rounded-md p-2 font-semibold w-32'>
                            Agregar
                        </button>
                    </div>

                </form>

            </div>
        </div>
    )
}

export default AgregarEquipoLab