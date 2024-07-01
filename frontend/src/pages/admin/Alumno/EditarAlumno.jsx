import React from 'react'
import { styles } from "../../../assets/styles/global-styles"
import { hexToRgba } from "../../../assets/styles/hexToRgba"
import { Input } from "@nextui-org/react";
import { useForm } from "react-hook-form";
import { Select, SelectItem } from "@nextui-org/react";

function EditarAlumno() {
    const { backegrounGreen } = styles;
    const { backgroundRed } = styles;
    const backgroundColorWithTransparency = hexToRgba(styles.backgroundEditar, 0.0); // 0.5 es la transparencia deseada
    const { register, formState: { errors }, handleSubmit, watch } = useForm();
    
    const onSubmit = handleSubmit(async (values) => {
        try {
            console.log(values)
        }
        catch (error) {

        }
    });

  return (
    <div className='flex justify-center items-center h-full mt-20'>
            <div className="border-orange-600 border-[5px] p-10 shadow-sm rounded-3xl" style={{ backgroundColor: backgroundColorWithTransparency }}>
                <div className="flex items-center justify-center">
                    <p className="text-xl font-bold text-black text-center">Editar Alumno</p>
                </div>

                <form onSubmit={onSubmit} className="flex flex-col gap-4 my-10 paddin">
                    <div className="flex items-center justify-between ">
                        <p className='text-black w-32 font-semibold'>Nombre:</p>
                        <Input
                            label="Nombre Alumno"
                            variant="bordered"
                            isInvalid={errors?.nombre ? true : false}
                            errorMessage={errors?.nombre?.message}
                            {
                            ...register("nombre", {
                                required: "El nombre es requerido",
                                minLength: {
                                    value: 3,
                                    message: "El nombre debe contener al menos tres caracteres",
                                },
                                maxLength: {
                                    value: 50,
                                    message: "El nombre debe de contener la menos 50 caracteres"
                                }
                            })
                            } />
                    </div>
                    <div className="flex items-center justify-between">
                        <p className='text-black w-32 font-semibold'>Matricula:</p>
                        <Input
                            label="Matricula"
                            variant="bordered"
                            isInvalid={errors?.matricula ? true : false}

                            errorMessage={errors?.matricula?.message}
                            {
                            ...register("matricula", {
                                required: "La cantidad es requerida",
                                minLength: {
                                    value: 8,
                                    message: "La minima cantidad es de 8",
                                },
                                maxLength: {
                                    value: 8,
                                    message: "La cantidad maxima es 8"
                                }
                            })
                            } />
                    </div>
                    <div className="flex items-center justify-between">
                    <p className='text-black w-32 font-semibold'>Estado:</p>
                        <Select
                            label="Estado"
                            placeholder="Select  status"

                            className="max-w-xs"
                            isInvalid={errors?.estado ? true : false}
                            errorMessage={errors?.estado?.message}
                            {
                            ...register("estado", {
                                required: "El estado es requerido",
                               
                            })
                            }
                        >
                            
                                <SelectItem key={"Activo"}>
                                    Activo
                                </SelectItem>
                                <SelectItem key={"Inativo"}>
                                    Inactivo
                                </SelectItem>
                        </Select>
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
                                required: "La cantidad es requerida",
                                minLength: {
                                    value: 1,
                                    message: "La minima cantidad es de 1",
                                },
                                maxLength: {
                                    value: 100,
                                    message: "La cantidad maxima es 100"
                                }
                            })
                            } />
                    </div>
                    <div className="flex items-center justify-between">
                        <p className='text-black w-32 font-semibold'>Grupo:</p>
                        <Input
                            label="Grupo"
                            variant="bordered"
                            isInvalid={errors?.grupo ? true : false}

                            errorMessage={errors?.grupo?.message}
                            {
                            ...register("grupo", {
                                required: "La cantidad es requerida",
                                minLength: {
                                    value: 1,
                                    message: "La minima cantidad es de 1",
                                },
                                maxLength: {
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
                            Editar
                        </button>
                    </div>

                </form>

            </div>
        </div>
  )
}

export default EditarAlumno