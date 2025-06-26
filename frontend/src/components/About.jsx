import React from 'react'
import about1 from "../assets/about1.png"
import { FaArrowRight,FaChalkboardTeacher, FaClock, FaUsers } from 'react-icons/fa'
import playButton from '../assets/playButton.png'
const About = () => {
  return (
    <section className='max-padd-container px-6 lg:px-12 py-16 xl:py-20'>
      <div className='max-w-xl mx-auto text-center pb-16'>
        <h3 className='h3 capitalize'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam impedit, cumque voluptatem quis nulla.</h3>
        <p>Laboriosam impedit, cumque voluptatem quis nulla tempore natus voluptatum eius nam voluptatibus dicta voluptates aut. Blanditiis fugiat dolorum fugit itaque ipsum reprehenderit.
        </p>
      </div>

    <div className='grid lg:grid-cols-[2fr_1fr] gap-5'>
      <div className='relative'>
        <img src={about1} alt="" className='rounded-3xl' />
        <div className='absolute top-0 left-0 h-full w-full flex items-center justify-center'>
          <img src={playButton} alt="" height={66} width={66}/>
        </div>
      </div>

      <div className='flex justify-between flex-col bg-[#1c404d] text-white rounded-3xl p-4'>
        <div className=''>
          <h4 className='medium-16'>Do you have formal taching experience</h4>
          <p className='mt-1 text-white/60 text-[13px]'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro, sit ea delectus ipsum magni blanditiis, ab ullam autem numquam accusantium veritatis reprehenderit sunt. Aperiam porro voluptatum et recusandae ullam! Cupiditate?</p>
        </div>

        <div className='flexBetween gap-10'>
          <h4 className='medium-16'>Become a tutor on our platform</h4>
          <button className='btn-light text-tertiary'><FaArrowRight/></button>
        </div>
      </div>
    </div>


      <div className='grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 gap-4 bg-light rounded-3xl mt-8'>
        <div className='flex flex-col gap-y-2 p-4 rounded-3xl bg-[#aedae6]'>
          <FaChalkboardTeacher className='text-xl mb-2 bg-white rounded-full h-10 w-10 p-2.5'/>
          <h5  className='h5'>Teacher What you know</h5>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, nisi beatae pariatur quo eos minus unde amet quidem aperiam, facilis voluptatibus nostrum consequatur rerum sed similique animi molestiae aliquid illum.</p>
        </div>

        <div className='flex flex-col gap-y-2 p-4 rounded-3xl bg-[#fddbdb]'>
          <FaUsers className='text-xl mb-2 bg-white rounded-full h-10 w-10 p-2.5'/>
          <h5  className='h5'>Teacher What you know</h5>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, nisi beatae pariatur quo eos minus unde amet quidem aperiam, facilis voluptatibus nostrum consequatur rerum sed similique animi molestiae aliquid illum.</p>
        </div>


        <div className='flex flex-col gap-y-2 p-4 rounded-3xl bg-[#fff6c9]'>
          <FaClock className='text-xl mb-2 bg-white rounded-full h-10 w-10 p-2.5'/>
          <h5  className='h5'>Teacher What you know</h5>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, nisi beatae pariatur quo eos minus unde amet quidem aperiam, facilis voluptatibus nostrum consequatur rerum sed similique animi molestiae aliquid illum.</p>
        </div>
      </div>
    </section>
  )
}

export default About