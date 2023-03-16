import React from 'react';
import dev from '../assets/unnamed.png';

function Hero() {
  return (
    <div className='w-full h-[350px] bg-gray-400 '>
        <div className='grid grid-cols-2 justify-between px-8 pt-8 text-white'>
            <div>
                <h1 className='font-bold text-2xl pb-8'>
                    The best Instructor out there
                </h1>
                <p className='pb-5'>Start your journey as a developer</p>
                <button className='px-6 py-3 bg-blue-700 text-white rounded-lg'>Get started</button>
            </div>
        </div>

        <div>
            <img src={dev} alt="developer"/>
        </div>
    </div>
  )
}

export default Hero;