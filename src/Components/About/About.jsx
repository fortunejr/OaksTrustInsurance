import React from 'react'
import { img13,  } from '../../imports'
import { FaArrowRight } from "react-icons/fa";
import { Link } from 'react-router';
import FadeIn from '../fadein';

const About = () => {
  return (
    <FadeIn duration = {100} >
    <div className='container mx-auto px-7 lg:px-20 py-14 lg:py-20 bg-orange-50'>
        <h2 className='font-bold text-center mb-7 text-3xl mt-7 lg:text-6xl'>Who are we?</h2>
    <div className='lg:flex'>
        <div className='lg:w-1/2'>
            <img 
                className='w-full object-cover  lg:h-full slide-in-blurred-bottom rounded-3xl border-x-8 border-orange-200' 
                src={img13} 
                alt="solar panel" 
            />
        </div>

        <div className='lg:w-1/2 lg:pl-10'>
            <p className='lg:text-xl mt-4'>
                Oak & Trust Insurance was founded with a clear purpose: to offer dependable, high-quality insurance that Australians can trust. With years of combined experience in the finance and insurance sectors, our leadership and advisors understand the importance of protecting what matters most—from homes and families to businesses and investments.
            </p>
        </div>
    </div>

    <div className='pt-7'>
      <Link to= {"/about"}>
        <button className='flex items-center justify-evenly gap-4 bg-customOrange px-5 py-3 rounded-xl font-bold text-white'>Read More
        <FaArrowRight />
           </button>

           </Link>
    </div>
</div>
</FadeIn>
  )
}

export default About