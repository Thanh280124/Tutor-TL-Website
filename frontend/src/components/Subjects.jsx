import React from 'react'
import { Link } from 'react-router-dom'
import {subjectsData} from '../assets/data'
const Subjects = () => {
  return (
    <section className='max-padd-container py-16 xl:py-20'>
      <div className='max-w-lg mx-auto text-center pb-16'>
        <h3 className='h3'>Explore By Subjects</h3>
        <p>
          Discover a wide range of subjects that cater to your interests and career goals. Whether you're looking to enhance your skills or explore new fields, we have something for everyone.
        </p>
      </div>

        <div className='flexCenter flex-wrap gap-1 sm:gap-14'>
          {subjectsData.map((subject, index) => (
            <Link key={index} onClick={() => scrollTo(0,0)} to={`/tutors/${subject.name}`} className='flexCenter flex-col gap-2 text-center bg-white h-28 w-40 pt-2 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300'>
              <img src={subject.image} alt="" height={55} width={55} />
              <h5 className='h5 font-semibold mt-3'>{subject.name}</h5>
            </Link>
          ))}
        </div>

    </section>
  )
}

export default Subjects