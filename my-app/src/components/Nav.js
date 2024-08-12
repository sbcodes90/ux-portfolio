import React from 'react'
import hamburgerMenu from "../icons/hamburger-menu.png"
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'

export default function Nav() {

  return (
    <>
      <div className='bg-black text-white flex flex-row justify-end p-3 lg:p-5'>
      <Menu>
    
      <MenuButton  className="md:hidden lg:hidden" >
        <img src={hamburgerMenu} alt="menu" className='w-10'/>
        </MenuButton>
      <MenuItems anchor="bottom" className=" bg-black text-white text-center w-full h-svh text-xl">
        <MenuItem>
          <a className="block data-[focus]:bg-teal-300 p-10 data-[focus]:text-black font-bold" href="/about">
            About
          </a>
        </MenuItem>
        <MenuItem>
          <a className="block data-[focus]:bg-teal-300 p-10 data-[focus]:text-black font-bold" href="/work">
            Work
          </a>
        </MenuItem>
        <MenuItem>
          <a className="block data-[focus]:bg-teal-300 p-10 data-[focus]:text-black font-bold" href="/resume">
            Resume
          </a>
        </MenuItem>
        <MenuItem>
          <a className="block data-[focus]:bg-teal-300 p-10 data-[focus]:text-black font-bold" href="/contact">
            Contact
          </a>
        </MenuItem>
      </MenuItems>
    
    </Menu>        <ul className='hidden lg:flex lg:flex-row'>
         
          <div className='flex flex-row gap-10'>
          <li className='flex-1'>Logo</li>
            <li>About</li>
            <li>Work</li>
            <li>Resume</li>
            <li>Contact</li>
          </div>
        </ul>

      </div>


    
  



    </>
  )
}
