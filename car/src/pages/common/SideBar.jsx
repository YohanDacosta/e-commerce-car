import React from 'react';
import { VscEyeClosed } from "react-icons/vsc";
import { FaMobileAlt } from "react-icons/fa";

const SideBar = ({active, fnc}) => {
  return (
    <aside className={`transition-all duration-500 ease-in-out transform ${active ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'} md:hidden absolute left-0 top-0 w-full bg-transparent h-full z-50`}>
      <div className='flex justify-between p-6 bg-gray-300 max-w-[18rem] h-full bg-opacity-95 w-full'>
        
        <ul className='flex flex-col space-y-6 tracking-tighter'>
          <a className='transition-all hover:text-yellow-500' href="">Home</a>
          <a className='transition-all hover:text-yellow-500' href="">Cars</a>
          <a className='transition-all hover:text-yellow-500' href="">About us</a>
          <a className='transition-all hover:text-yellow-500' href="">Contact us</a>
          
          <div className='flex absolute bottom-0 left-5 pb-6'>
            <p className='flex items-center border-2 border-black rounded-lg px-3 py-1.5 tracking-tighter hover:border-yellow-500 hover:cursor-pointer'>
              <FaMobileAlt size={14}/>
              <span>+78 235 89 99</span>
            </p>
          </div>
        </ul>

        <div className='flex border-2 border-black hover:cursor-pointer hover:border-yellow-500 transition-all duration-500 ease-in-out h-6 w-6 rounded-full justify-center items-center' onClick={fnc}>
          <VscEyeClosed size={18} />
        </div>
      </div>
    </aside>
  )
}

export default SideBar