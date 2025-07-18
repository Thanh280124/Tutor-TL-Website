import React from 'react'
import { useState } from 'react'
import Navbar from './Navbar'
import { Link } from 'react-router-dom'
import { CgMenuLeft } from 'react-icons/cg'
import {TbArrowNarrowRight} from 'react-icons/tb'
import {RiUserLine} from 'react-icons/ri'


const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false) 

  const toggleMenu = () => {
    setMenuOpen(!menuOpen)
  }
  return (
    <header className='max-padd-container 2xl:max-w-[2500px] w-full fixed z-50 bg-deep text-white py-5'>
      <div className='flexBetween'>
        <Link to={'/'} className='bold-24 flex-1 flex'>
        <span className='inline-flex'>
          <span className='inline-flex items-center justify-center p-2 h-8 w-8 bg-secondary text-tertiary -rotate-[31deg] rounded-full'>
            TL
          </span>
          LoveTutors
        </span>
        </Link>

        <div className='flex-1'>
          <Navbar menuOpen={menuOpen} toggleMenu = {toggleMenu} containerStyles={`${menuOpen ? "flex flex-col gap-y-12 h-screen w-[222px] absolute left-0 top-0 bg-deep z-50 px-10 py-4 shadow-2xl" : 'hidden lg:flex gap-x-5 xl:gap-x-12 medium-15 px-2 py-3'}`}/>
        </div>

        <div className='flex-1 flex items-center justify-end gap-x-3 sm:gap-x-10'>
          {!menuOpen && (
            <CgMenuLeft onClick={toggleMenu} className='text-2xl lg:hidden cursor-pointer '/>
          )}
          <div>
            <div>
              <button className='btn-white medium-18 !border-none flexCenter gap-x-2 !py-3'>Login <RiUserLine/></button>
            </div>
          </div>
        </div>
        
      </div>
    </header>
  )
}

export default Header