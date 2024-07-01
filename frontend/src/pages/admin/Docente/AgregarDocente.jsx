import React from 'react'
import { styles } from "../../../assets/styles/global-styles"
import { hexToRgba } from "../../../assets/styles/hexToRgba"
import { useForm } from "react-hook-form";
import { Input } from "@nextui-org/react";
import { Select, SelectItem } from "@nextui-org/react";
import { agregarAlumno } from '../../../api/alumno';
import { Toaster, toast } from "sonner";

function AgregarDocente() {
    const { backegrounGreen } = styles;
    const { backgroundRed } = styles;
    const backgroundColorWithTransparency = hexToRgba(styles.backgroundAgregar, 0.0); // 0.5 es la transparencia deseada
    const { register, formState: { errors }, handleSubmit, watch } = useForm();


    const onSubmit = handleSubmit(async (values) => {
        try {
            console.log(values)

            const res = await agregarAlumno(values);
            if (res) {
                toast.success("El alumno se agrego.");
            }
        }
        catch (error) {
            console.error("Error al agregar el alumno:", error);
        }
    });

    return (
        <div className='flex justify-center items-center h-full mt-20'>
            <Toaster richColors />
            <div className="border-green-600 border-[5px] p-10 shadow-sm rounded-3xl" style={{ backgroundColor: backgroundColorWithTransparency }}>
                <div className="flex items-center justify-center">
                    <p className="text-xl font-bold text-black text-center">Agregar Nuevo Docente</p>
                </div>

                <form onSubmit={onSubmit} className="flex flex-col gap-4 my-10 paddin">


                    <div className="flex items-center justify-between">
                        <p className='text-black w-32 font-semibold'>Nombre:</p>
                        <Input
                            label="Nombre Docente"
                            variant="bordered"
                            isInvalid={errors?.nombre ? true : false}
                            errorMessage={errors?.nombre?.message}
                            {
                            ...register("nombre", {
                                required: "El nombre es requerido",
                                minLength: {
                                    value: 3,
                                    message: "La minima cantidad de caracteres es de 3",
                                },
                                maxLength: {
                                    value: 40,
                                    message: "La cantidad maxima de caracteres es de 40"
                                }
                            })
                            } />
                    </div>


                    <div className="flex items-center justify-between">
                        <p className='text-black w-32 font-semibold'>Materias:</p>
                        <Select
                            label="Materias"
                            placeholder="Select  status"

                            className="max-w-xs"
                            isInvalid={errors?.materias ? true : false}
                            errorMessage={errors?.materias?.message}
                            {
                            ...register("materias", {
                                required: "El estado es requerido",

                            })
                            }
                        >

                            <SelectItem key={"DIRECCIÓN DE EQUIPOS DE ALTO RENDIMIENTO"}>
                                DIRECCIÓN DE EQUIPOS DE ALTO RENDIMIENTO
                            </SelectItem>
                            <SelectItem key={"Inativo"}>
                                DISEÑO DE EXPERIMENTOS
                            </SelectItem>
                            <SelectItem key={"Inativo"}>
                                FÍSICA
                            </SelectItem>
                            <SelectItem key={"Inativo"}>
                                TECNOLOGÍA DE ALIMENTOS II
                            </SelectItem>
                            <SelectItem key={"Inativo"}>
                                ESTANDARIZACIÓN DE PRODUCTOS ALIMENTARIOS
                            </SelectItem>
                            <SelectItem key={"Inativo"}>
                                CÁLCULO DIFERENCIAL
                            </SelectItem>
                            <SelectItem key={"Inativo"}>
                                TERMODINÁMICA
                            </SelectItem>
                            <SelectItem key={"Inativo"}>
                                TERMODINÁMICA
                            </SelectItem>
                        </Select>
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

export default AgregarDocente