import React from 'react'
import BannerCard from '../shared/BannerCard'
import favBook from '../../assets/fb.jpg'
export const Banner = () => {
    return (
        <div className=' bg-tsd-400 px-4 lg:px-24 flex items-center'>
            <div className='flex flex-col md:flex-row-reverse justify-between items-center gap-12 py-40'>
                {/* right side */}
                <div className='md:w-1/2 h-full'>
                <img src={favBook} alt="" className='rounded md:w-10/12' />
                </div>

                {/* left side */}
                <div className='md:w-1/2 space-y-8 bg-tsd-400 '>
                    <h1 className='lg:text-6xl text-5xl font-bold text-black mb-5 lg:leading-tight leading-snug'>BUY AND SELL OLD BOOKS <span className='text-blue-700'>for the best prices</span></h1>
                    <p>Books are made to gain and exchange knowledge, not to dump in waste.</p>
                  
                </div>
            </div>
        </div>
    )
}
