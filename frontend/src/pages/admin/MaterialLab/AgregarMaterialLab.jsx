import { hexToRgba } from "../../../assets/styles/hexToRgba"
import { styles } from "../../../assets/styles/global-styles"
import { Input } from "@nextui-org/react";
import { useForm } from "react-hook-form";
import { agregarMatLab } from "../../../api/materiallab";
import { Toaster,toast } from "sonner";

//dto : create-material-lab.dto

function AgregarMaterialLab() {
    const { backegrounGreen } = styles;
    const { backgroundRed } = styles;
    const backgroundColorWithTransparency = hexToRgba(styles.backgroundAgregar, 0.0); // 0.5 es la transparencia deseada

    const { register, formState: { errors }, handleSubmit, watch } = useForm();

    const onSubmit = handleSubmit(async (values) => {
        try {
            console.log(values)
            const data ={
                ...values,
                existencias: parseInt(values.existencias)
            }
            const res = await agregarMatLab(data);
            if(res){
                toast.success("El material se agrego.");
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
                    <p className="text-xl font-bold text-black text-center">Agregar Nuevo Material</p>
                </div>

                <form onSubmit={onSubmit} className="flex flex-col gap-4 my-10 paddin">
                    <div className="flex items-center justify-between ">
                       
                        <Input
                            label="Nombre Material"
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
                      
                        <Input
                            label="Cantidad Material"
                            variant="bordered"
                            isInvalid={errors?.existencias ? true : false}
                            type="number"
                            errorMessage={errors?.existencias?.message}
                            {
                            ...register("existencias", {
                                required: "La cantidad es requerida",
                                min: {
                                    value: 1,
                                    message: "La minima cantidad es de 1",
                                    
                                },
                                max: {
                                    value: 50,
                                    message: "La cantidad maxima es 50"
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

export default AgregarMaterialLab