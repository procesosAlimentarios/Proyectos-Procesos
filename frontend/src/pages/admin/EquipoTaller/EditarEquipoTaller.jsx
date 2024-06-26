import { styles } from "../../../assets/styles/global-styles"
import { hexToRgba } from "../../../assets/styles/hexToRgba"
import { Input } from "@nextui-org/react";
import { useForm } from "react-hook-form";
import { Select, SelectItem } from "@nextui-org/react";

//update-equipos-taller.dto

function EditarEquipoTaller() {
    const { backegrounGreen } = styles;
    const { backgroundRed } = styles;
    const backgroundColorWithTransparency = hexToRgba(styles.backgroundEditar, 0.0); // 0.5 es la transparencia deseada
    const { register, formState: { errors }, handleSubmit, watch } = useForm();


    const onSubmit = handleSubmit(async (values) => {
        try {
            console.log(values)
        }
        catch (error) {
            console.error("Error al agregar el equipo:", error);
        }
    });


    return (
        <div className='flex justify-center items-center h-full mt-20'>
            <div className="border-orange-600 border-[5px] p-10 shadow-sm rounded-3xl" style={{ backgroundColor: backgroundColorWithTransparency }}>
                <div className="flex items-center justify-center">
                    <p className="text-xl font-bold text-black text-center">Editar Equipo de Taller</p>
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
                                required: "El estado es requerido",
                                minLength: {
                                    value: 3,
                                    message: "El nombre debe contener al menos tres caracteres",
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
                                    message: "El nombre debe contener al menos tres caracteres",
                                },
                                maxLength: {
                                    value: 20,
                                    message: "El nombre debe de contener la menos 50 caracteres"
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

export default EditarEquipoTaller