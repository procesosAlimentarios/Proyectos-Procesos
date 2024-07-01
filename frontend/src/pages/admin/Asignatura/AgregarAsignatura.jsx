import React from 'react'
import { styles } from "../../../assets/styles/global-styles"
import { hexToRgba } from "../../../assets/styles/hexToRgba"
import { useForm } from "react-hook-form";
import { Input } from "@nextui-org/react";
import { agregarAsignatura } from '../../../api/asignatura';
import {Toaster, toast} from "sonner";

function AgregarAsignatura() {
    const { backegrounGreen } = styles;
    const { backgroundRed } = styles;
    const backgroundColorWithTransparency = hexToRgba(styles.backgroundAgregar, 0.0); // 0.5 es la transparencia deseada
    const { register, formState: { errors }, handleSubmit, watch } = useForm();
    

    const onSubmit = handleSubmit(async (values) => {
        try {
            console.log(values)

            const res = await agregarAsignatura(values);
            if(res){
                toast.success("Se agrego la asignatura.");
            }
        }
        catch (error) {
            console.error("Error al agregar la asignatura", error);
        }
    });

  return (
    <div className='flex justify-center items-center h-full mt-20'>
            <Toaster richColors/>
            <div className="border-green-600 border-[5px] p-10 shadow-sm rounded-3xl" style={{ backgroundColor: backgroundColorWithTransparency }}>
                <div className="flex items-center justify-center">
                    <p className="text-xl font-bold text-black text-center">Agregar Asignatura</p>
                </div>

                <form onSubmit={onSubmit} className="flex flex-col gap-4 my-10 paddin">
                    <div className="flex items-center justify-between ">
                        <p className='text-black w-32 font-semibold'>Nombre:</p>

                        <Input
                            label="Nombre Asignatura"
                            variant="bordered"
                            isInvalid={errors?.nombre ? true : false}
                            errorMessage={errors?.nombre?.message}
                            {
                            ...register("nombre", {
                                required: "El nombre es requerido",
                                minLength: {
                                    value: 5,
                                    message: "El nombre debe contener al menos 5 caracteres",
                                },
                                maxLength: {
                                    value: 40,
                                    message: "El nombre debe de contener la menos 40 caracteres"
                                }
                            })
                            } />
                    </div>
                    <div className="flex items-center justify-between">
                        <p className='text-black w-32 font-semibold'>Cuatrimestre:</p>
                        <Input
                            label="Cuatrimestre"
                            variant="bordered"
                            isInvalid={errors?.cuatrimestre ? true : false}

                            errorMessage={errors?.cuatrimestre?.message}
                            {
                            ...register("cuatrimestre", {
                                required: "El cuatrimestre es requerido",
                                minLength: {
                                    value: 5,
                                    message: "La minima cantidad es de 5",
                                },
                                maxLength: {
                                    value: 20,
                                    message: "La cantidad maxima es 20"
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

export default AgregarAsignatura