import React from 'react'
import { IoLogoElectron } from "react-icons/io5";

export default function App() {
  return (
    <div className='flex justify-between items-center px-4 py-1.5 shadow-md'>
      <IoLogoElectron size={28} className='cursor-pointer' />
      <div className='flex items-center gap-4'>
        <button className='text-lg font-medium cursor-pointer'>Home</button>
        <button className='text-lg font-medium cursor-pointer'>About me</button>
        <button className='text-lg font-medium cursor-pointer'>Contact</button>
        <button className='text-lg font-medium cursor-pointer'>Project</button>
      </div>
    </div>
  )
}
