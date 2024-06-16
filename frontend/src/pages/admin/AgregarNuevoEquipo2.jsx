import { styles } from "../../assets/styles/global-styles"
import { hexToRgba } from "../../assets/styles/hexToRgba"
import { useForm } from "react-hook-form";
import { Input } from "@nextui-org/react";
import React from "react";
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button } from "@nextui-org/react";

function AgregarNuevoEquipo2() {
    const { backgroundGreen } = styles;
    const { backgroundRed } = styles;
    const backgroundColorWithTransparency = hexToRgba(styles.backgroundAgregar, 0.5); // 0.5 es la transparencia deseada
    const { register, formState: { errors }, handleSubmit, watch } = useForm();

    const [selectedKeys, setSelectedKeys] = React.useState(new Set(["text"]));

    const selectedValue = React.useMemo(
        () => Array.from(selectedKeys).join(", ").replaceAll("_", " "),
        [selectedKeys]
    );

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
            <div className="border-green-600 border-[5px] p-10 shadow-sm rounded-3xl" style={{ backgroundColor: backgroundColorWithTransparency }}>
                <div className="flex items-center justify-center">
                    <p className="text-xl font-bold text-black text-center">Agregar Nuevo Equipo de Taller</p>
                </div>

                <form onSubmit={onSubmit} className="flex flex-col gap-4 my-10 paddin">
                    <div className="flex items-center justify-between">
                        <p className='text-black w-32 font-semibold'>Nombre:</p>
                        <Input
                            type="text"
                            placeholder="Nombre equipo"
                            className="flex-grow w-full"
                        />
                    </div>
                    <div className="flex items-center justify-between">
                        <p className='text-black w-32 font-semibold'>N° Inventario:</p>
                        <Input
                            type="password"
                            placeholder="N° Inventario"
                            className="flex-grow w-full text-black"
                        />
                    </div>
                    <div className="flex items-center justify-between">
                        <p className='text-black w-32 font-semibold'>Estado:</p>
                        <Dropdown className="w-full">
                            <DropdownTrigger>
                                <Button
                                    variant="bordered"
                                    className="capitalize w-full"
                                >
                                    {selectedValue}
                                </Button>
                            </DropdownTrigger>
                            <DropdownMenu
                                aria-label="Single selection example"
                                variant="flat"
                                disallowEmptySelection
                                selectionMode="single"
                                selectedKeys={selectedKeys}
                                onSelectionChange={setSelectedKeys}
                                className="w-full"
                            >
                                <DropdownItem key="text">Text</DropdownItem>
                                <DropdownItem key="number">Number</DropdownItem>
                                <DropdownItem key="date">Date</DropdownItem>
                                <DropdownItem key="single_date">Single Date</DropdownItem>
                                <DropdownItem key="iteration">Iteration</DropdownItem>
                            </DropdownMenu>
                        </Dropdown>
                    </div>
                    <div className="flex items-center justify-center gap-4">
                        <button type="button" style={{ backgroundColor: backgroundRed }} className='text-white rounded-md p-2 font-semibold w-32'>
                            Cancelar
                        </button>
                        <button type="submit" style={{ backgroundColor: backgroundGreen }} className='text-white rounded-md p-2 font-semibold w-32'>
                            Agregar
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default AgregarNuevoEquipo2;
