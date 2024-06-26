import { styles } from "../../../assets/styles/global-styles";
import Input from "../../../components/Input";

//Aditivos
/**
 * AgregarAditivo.jsx
 * EditarAditivo.jsx
 * @returns 
 */
function MaterialAditivos() {
  const { backgroundBlue, backgroundRed } = styles;

  return (
    <div className="overflow-x-auto">
      <div className="flex justify-start items-center h-24  bg-green-200 my-2">
        <p className="ml-16 text-left font-bold text-3xl">Material de Aditivos Almacen</p>
        <button className="ml-auto mr-16 bg-green-500 text-white font-bold py-3 px-9 text-lg rounded">
          Nuevo Material
        </button>
      </div>

      <div className="flex justify-center items-center h-20 bg-purple-200 my-2">
        <p className="text-left font-bold text-xl mx-4">Buscar Aditivo</p>
        <Input type="text" placeholder="Nombre material" className="flex-grow mx-4" />
        <button className="bg-black text-white font-bold py-3 px-6 text-lg rounded mx-4">
          Buscar
        </button>
      </div>


      <div className="w-full flex justify-center mt-6">
        <div className="w-full max-w-4xl">
          <table className="min-w-full divide-y divide-gray-200 border-4 border-black">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider border-4 border-black">Nombre</th>
                <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider border-4 border-black">Descripción</th>
                <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider border-4 border-black">Acciones</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              <tr>
                <td className="px-6 py-4 whitespace-nowrap border-4 border-black text-center">Aditivo A</td>
                <td className="px-6 py-4 whitespace-nowrap border-4 border-black text-center">Descripción del aditivo A</td>
                <td className="px-6 py-4 whitespace-nowrap border-4 border-black text-center">
                  <button style={{ backgroundColor: backgroundRed }} className='text-white rounded-md p-2 font-semibold w-32 mr-2'>
                    Eliminar
                  </button>
                  <button style={{ backgroundColor: backgroundBlue }} className='text-white rounded-md p-2 font-semibold w-32 mr-2'>
                    Editar
                  </button>
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap border-4 border-black text-center">Aditivo B</td>
                <td className="px-6 py-4 whitespace-nowrap border-4 border-black text-center">Descripción del aditivo B</td>
                <td className="px-6 py-4 whitespace-nowrap border-4 border-black text-center">
                  <button style={{ backgroundColor: backgroundRed }} className='text-white rounded-md p-2 font-semibold w-32 mr-2'>
                    Eliminar
                  </button>
                  <button style={{ backgroundColor: backgroundBlue }} className='text-white rounded-md p-2 font-semibold w-32 mr-2'>
                    Editar
                  </button>
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap border-4 border-black text-center">Aditivo C</td>
                <td className="px-6 py-4 whitespace-nowrap border-4 border-black text-center">Descripción del aditivo C</td>
                <td className="px-6 py-4 whitespace-nowrap border-4 border-black text-center">
                  <button style={{ backgroundColor: backgroundRed }} className='text-white rounded-md p-2 font-semibold w-32 mr-2'>
                    Eliminar
                  </button>
                  <button style={{ backgroundColor: backgroundBlue }} className='text-white rounded-md p-2 font-semibold w-32 mr-2'>
                    Editar
                  </button>
                </td>
              </tr>
              {/* Agrega más filas según sea necesario */}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default MaterialAditivos;