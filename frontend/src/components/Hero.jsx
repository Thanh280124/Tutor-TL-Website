import React from 'react'
import { Link } from 'react-router-dom'
const Hero = () => {
  return (
    <section className='max-padd-container 2xl:max-w-[2500px] bg-hero bg-cover bg-center bg-no-repeat h-[711px] 2xl:h-[890px] w-full relative'>
        <div className='pt-44 xl:pt-52 max-w-[677px] text-white'>
            <span className='ring-1 ring-white/30 max-w-72 px-3 rounded-3xl'>
                <span className='text-secondary pr-1'>#1</span>
                The Most Profestional Turoting Website
            </span>
            <h1 className='h1 max-w-[44rem] mt-6'>Persionalized 1-on-1 Tutoring for Every Learner,Anytime,Anywhere</h1>
            <p className='text-gray-10'>
                Discover the power of personalized learning with our expert tutors. Whether you're struggling with a specific subject or looking to excel, our 1-on-1 tutoring sessions are designed to meet your unique needs. Join us today and unlock your full potential!
            </p>
            <div className='mt-8'>
                <Link to='/login' className='btn-light !bg-transparent !ring-white !py-3'>
                Registed Now
                </Link>

                <Link to='/tutors' className='btn-secondary !text-tertiary !py-3 ml-3'>
                Book Appointment
                </Link>
            </div>
        </div>
    </section>
  )
}

export default Hero