import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className='max-padd-container 2xl:max-w-[2500px] bg-gray-900 text-white py-10'>
        <div className='max-auto grid grid-cols-1 md:grid-cols-[2fr_1fr_1fr]
        gap-8'>
            <div className='max-w-sm'>
                <Link to={'/'} className='bold-24 flex-1 flex mb-4'>
        <span className='inline-flex'>
          <span className='inline-flex items-center justify-center p-2 h-8 w-8 bg-secondary text-tertiary -rotate-[31deg] rounded-full'>
            TL
          </span>
          LoveTutors
        </span>
        </Link>
        <p className='text-gray-400 text-sm leading-relaxed'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, alias, nulla molestiae rerum quasi expedita error tempora, pariatur facere quod veniam quidem atque ex. Veniam iure tempore debitis eaque rerum!
        </p>
            </div>


            <div>
                <h4 className='h4 mb-4'>Explore</h4>
                <ul className='space-y-2 text-gray-400 text-sm'>
                    <li>
                        <a href="/" className='hover:text-white transition'>Home</a>
                    </li>

                    <li>
                        <a href="/about" className='hover:text-white transition'>About</a>
                    </li>

                    <li>
                        <a href="/tutors" className='hover:text-white transition'>Tutors</a>
                    </li>

                    <li>
                        <a href="/privacy-policy" className='hover:text-white transition'>Privacy Policy</a>
                    </li>
                </ul>
            </div>



            <div>
                <h4 className='h4 mb-4'> Get In Touch</h4>
                <p className='text-gray-400 text-sm'>+385 457375435</p>
                <p className='text-gray-400 text-sm'>support@gmail.com</p>
            </div>
        </div>

        <hr  className='border-none h-[1px] bg-white/50 mt-12'/>
        <div className='mt-10 text-center text-gray-400 text-sm'>
            @{new Date().getFullYear()} TL LoveTutors. All rights reserved
        </div>
    </footer>
  )
}

export default Footer