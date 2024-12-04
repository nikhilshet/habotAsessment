import React, { useState } from 'react'
import logo from '../assets/images/logoB.svg'
import drop from '../assets/images/Icons/dropDownIcon.svg'

function Header() {

  const [isOpen , setIsOpen] = useState(false)


  console.log(isOpen);
  
  return (
    <>
        <header className=' fixed bg-white w-full z-10 '>
          <div className='flex items-center bg py-4 justify-between px-12 lg:px-24'>

            <img className='h-8 ml-2' src={logo} alt="" />

            <nav className='hidden md:flex items-center space-x-4'>
                <p className='text-sm text-slate-500 cursor-pointer'>Find suppliers</p>
                <p className='text-sm text-slate-500 cursor-pointer flex'>Find Service Tags <img className='ml-2' src={drop} alt="" /></p>
                <button className= ' bg-white border-1 font-medium border-green-700 rounded-lg  py-3 px-8 transition-all duration-200 hover:bg-green-700 hover:text-white md:px-4 md:py-2 lg:py-3 lg:px-8' >Login / Sign Up</button>
            </nav>

            <button onClick={() => setIsOpen(true)} className='block md:hidden'>
              <img className='w-6' src="../hamburger.svg" alt="" />
            </button>
          </div>
          <div
    className={`fixed top-0 right-0 h-full w-2/3 bg-white transform transition-transform duration-300 ${
      isOpen ? "translate-x-0" : "translate-x-full"
    } md:hidden`}
  >
    <button className="absolute px-12 top-4 right-0" onClick={() => setIsOpen(false)}>
      <img className='w-6' src="../close.svg" alt="" />
    </button>

    <nav className="flex flex-col justify-center items-start p-8 space-y-6">
      <p className="text-md text-slate-500 cursor-pointer">Find suppliers</p>
      <p className="text-md text-slate-500 cursor-pointer flex">
        Find Service Tags <img className="ml-2" src={drop} alt="Dropdown" />
      </p>
      <button className="bg-white border-1 font-medium border-green-700 rounded-lg px-4 py-3 transition-all duration-200 hover:bg-green-700 hover:text-white">
        Login / Sign Up
      </button>
    </nav>
  </div>
</header>
       
        
    </>
  )
}

export default Header
