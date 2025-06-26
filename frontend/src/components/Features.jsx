import React from 'react'
import { FaUserTie,FaClock, FaUserFriends } from 'react-icons/fa'
import {BsClipboardFill} from 'react-icons/bs'
const Features = () => {
  return (
    <section className='mx-auto max-w-[1140px] px-6 lg-px-12 relative bottom-12 '>
        <div className='flex flex-wrap gap-x-4 bg-light rounded-3xl p-8'>
            <div className='flex flex-col gap-y-2 p-4 rounded-xl max-w-[233px]'>
                <FaUserTie className='text-xl mb-2'/>
                <h5 className='h5'>Quailfied Instructors</h5>
                <p>
                    Our instructors are highly qualified and experienced in their respective fields, ensuring that you receive the best education possible.
                </p>
            </div>

            <div className='flex flex-col gap-y-2 p-4 rounded-xl max-w-[233px] bg-secondary'>
                <FaClock className='text-xl mb-2'/>
                <h5 className='h5'>Quailfied Instructors</h5>
                <p>
                    Our instructors are highly qualified and experienced in their respective fields, ensuring that you receive the best education possible.
                </p>
            </div>

            <div className='flex flex-col gap-y-2 p-4 rounded-xl max-w-[233px]'>
                <BsClipboardFill className='text-xl mb-2'/>
                <h5 className='h5'>Quailfied Instructors</h5>
                <p>
                    Our instructors are highly qualified and experienced in their respective fields, ensuring that you receive the best education possible.
                </p>
            </div>

            <div className='flex flex-col gap-y-2 p-4 rounded-xl max-w-[233px]'>
                <FaUserFriends className='text-xl mb-2'/>
                <h5 className='h5'>Quailfied Instructors</h5>
                <p>
                    Our instructors are highly qualified and experienced in their respective fields, ensuring that you receive the best education possible.
                </p>
            </div>
        </div>
    </section>
  )
}

export default Features