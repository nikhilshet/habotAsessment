import React from 'react'
import arrow from '../assets/images/Icons/arrow.svg'
function DiveIn() {

    const locations = ["Abu Dhabi","Dubai","Sharjah & Ajman","Fujairah","Ras Al Khaimah","Umm Al Quwain"]

    const locationElements = locations.map((ele , index)=>{
        return(
            <div key={index}  className='w-64 h-16 rounded-md bg-white border-1 flex justify-center items-center border-[#E7760D] text-black'>
            <p className='text-lg'>{ele}</p>
            </div>
        )
       
    })
  return (
    <section className='flex flex-col px-4 py-24 justify-center items-center space-y-16 xl:flex-row xl:justify-between xl:px-32'>
        <div className=' w-full flex flex-col justify-center space-y-6 items-center xl:w-1/3 '>
            <h2 className='text-center text-3xl font-bold' >Ready to dive into HABOT?</h2>
            <p className='text-center leading-6 text-md font-light w-[90%]'> Signing up with HABOT opens the door to a world of new opportunities and potential for business growth. Gain access to a vibrant community of like-minded individuals, unlock valuable resources, and take the first step towards realizing your entrepreneurial dreams.</p>
            <button className='bg-green-700 text-white text-md font-semibold py-3 px-3 flex items-center rounded-md mb-4'>Sign up Today !<img className='ml-4'  src={arrow}></img></button>
        </div>
        <div className='grid gap-5 lg:grid-cols-2 xl:self-center'>
            {locationElements}
        </div>
    </section>
  )
}

export default DiveIn
