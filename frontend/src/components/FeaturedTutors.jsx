import React, { useContext } from 'react'
import tutor1 from '../assets/tutor1.png'
import tutor2 from '../assets/tutor2.png'
import tutor3 from '../assets/tutor3.png'
import {FaStar} from 'react-icons/fa'
import { AppContext } from '../context/AppContext'
const FeaturedTutors = () => {
  const {tutors,navigate,currency} = useContext(AppContext)
  return (
    <section className='max-padd-container 2xl:max-w-[2500px] py-16 xl:py-20'>
      <div className='max-w-xl mx-auto text-center pb-16'>
        <div className='h3'>
          <div className='inline-flex flexCenter gap-2 flex-wrap capitalize'>
            Made For Professionals
            <div className='flex items-center -space-x-3'>
              <img src={tutor1} alt="" width={44} height={44} className='rounded-full shadow-sm ring-1 ring-slate-900/5 object-cover aspect-square'/>
              <img src={tutor2} alt="" width={44} height={44} className='rounded-full shadow-sm ring-1 ring-slate-900/5 object-cover aspect-square' />
              <img src={tutor3} alt="" width={44} height={44} className='rounded-full shadow-sm ring-1 ring-slate-900/5 object-cover aspect-square' />

              </div>
              delivering qualityu Education
          </div>
        </div>
          <p>
            Our featured tutors are experts in their fields, providing top-notch education and personalized guidance to help you achieve your learning goals.
          </p>
        </div>

        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 sm:gap-x-10 sm:gap-y-12'>
          {tutors.slice(0, 5).map((tutor, index) => (
              <div key={index} className='rounded-xl overflow-hidden relative group'>
                <div>
                  <img src={tutor.image} alt="" className='overflow-hidden' />
                  <div className='absolute top-0 left-0 w-full h-full bg-black/15'></div>
                </div>
                <div className='p-3 absolute bottom-0 text-white group-hover:hidden'>
                  <span className='flex - items-baseline gap-x-1 medium-14'>
                    <FaStar className='text-yellow-200'/> 4.8
                  </span>
                  <h5 className='h5'>{tutor.name}</h5>
                  <p className='text-white/80'>{tutor.subject}</p>
                </div>

                <div className='absolute inset-0 flex items-end bg-black/40 opacity-0 group-hover:opacity-100 transition duration-300 z-10'>
                  <div className='flex flex-col w-full gap-2 p-4'>
                    <button className='btn-white !font-bold !text-xs !p-2' onClick={() =>{
                      navigate(`/sessions/${tutor._id}`),scrollTo(0,0)
                    }}>View Profile</button>

                     <button className='btn-white !font-bold !text-xs !p-2' onClick={() =>{
                      navigate(`/tutors`),scrollTo(0,0)
                    }}>Explore Tutor</button>

                  </div>
                </div>
              </div>
          ))}
      </div>
    </section>
  )
}

export default FeaturedTutors