import React from 'react'
import { useState } from 'react'
import { close, logo, menu } from '../assets/images'
import { navLinks } from '../constants'

function Navbar() {

  const [toggle,setTogggle] = useState(false);

  return (
      <nav className='w-full flex py-6 justify-between navbar'>
        <img src={logo} alt="Logo" className='w-[124px] h-[32px]'/>

        <ul className='list-none sm:flex hidden justify-end items-center flex-1'>
        {navLinks.map((nav,index)=> (
          <li 
          key={nav.id}
          className={`font-poppins font-normal cursor-pointer text-[16px] text-white
          ${index == navLinks.length - 1 ? 'mr-0' : 'mr-10'}`}
          >
            <a href={`#${nav.id}`}>
              {nav.title}
            </a>
          </li>
        ))}
      </ul>

      <div className='sm:hidden flex flex-1 justify-end items-center'>
        <img 
        src={toggle ? close : menu} 
        alt="Menu icon" 
        className='w-[28px] h-[28px] object-contain'
        onClick={()=> setTogggle((prev) => !prev)}
        />

        <div
          className={`${
            !toggle ? "hidden" : "flex"
          } p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
        >
          <ul className='list-none flex flex-col justify-end items-center flex-1'>
            {navLinks.map((nav,index)=> (
              <li 
              key={nav.id}
              className={`font-poppins font-normal cursor-pointer text-[16px] text-white
              ${index == navLinks.length - 1 ? 'mr-0' : 'mb-4'}`}
              >
                <a href={`#${nav.id}`}>
                  {nav.title}
                </a>
              </li>
            ))}
          </ul>
        </div>

      </div>

      </nav>
  )
}

export default Navbar