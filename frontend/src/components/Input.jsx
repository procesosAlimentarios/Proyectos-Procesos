import React from 'react'

const Input = ({name,type,placeholder}) => {
  return (
    <div className='flex flex-col'>
        <label>{name}</label>
        <input 
            className='border-gray-400 border-[1px] rounded-md p-2 focus:outline-none'
            type={type} 
            placeholder={placeholder} 
        />
    </div>
  )
}

export default Input