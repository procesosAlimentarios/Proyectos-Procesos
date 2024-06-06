
function MaterialAditivos() {
  return (
    <div className="overflow-x-auto">
    <table className="min-w-full divide-y divide-gray-200">
      <thead className="bg-gray-50">
        <tr>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID</th>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Nombre</th>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Descripción</th>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Acciones</th>
        </tr>
      </thead>
      <tbody className="bg-white divide-y divide-gray-200">
        <tr>
          <td className="px-6 py-4 whitespace-nowrap">1</td>
          <td className="px-6 py-4 whitespace-nowrap">Aditivo A</td>
          <td className="px-6 py-4 whitespace-nowrap">Descripción del aditivo A</td>
          <td className="px-6 py-4 whitespace-nowrap">
            <button className="text-indigo-600 hover:text-indigo-900">Editar</button>
            <button className="text-red-600 hover:text-red-900 ml-4">Eliminar</button>
          </td>
        </tr>
        <tr>
          <td className="px-6 py-4 whitespace-nowrap">2</td>
          <td className="px-6 py-4 whitespace-nowrap">Aditivo B</td>
          <td className="px-6 py-4 whitespace-nowrap">Descripción del aditivo B</td>
          <td className="px-6 py-4 whitespace-nowrap">
            <button className="text-indigo-600 hover:text-indigo-900">Editar</button>
            <button className="text-red-600 hover:text-red-900 ml-4">Eliminar</button>
          </td>
        </tr>
        {/* Agrega más filas según sea necesario */}
      </tbody>
    </table>
  </div>
  )
}

export default MaterialAditivos