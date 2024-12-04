import React from 'react'
import banner from '../assets/images/banner.svg'
import suitcase from '../assets/images/Icons/suitcase.svg'
import location from '../assets/images/Icons/location.svg'
function HeroSection() {
  return (
    <>
    <section className='bg-cover bg-center h-screen w-full relative' style={{backgroundImage:`url(${banner})`}}>
    <div className='absolute inset-0 bg-gradient-to-t from-[#072F57] to-[#072F57] opacity-70'></div>
        <div className='relative flex flex-col justify-center items-center h-full space-y-14'>
            <h1 className='text-white text-center text-3xl font-light leading-8 mt-12 lg:text-5xl'><span className='font-bold'>Are You a Supplier?</span><br />Explore Matching Opportunities</h1>
            <div>
                <form className='flex flex-col justify-center items-center space-y-6 lg:flex-row lg:justify-center lg:space-x-4 lg:space-y-0' action="">

                    <div className=' bg-white w-72 rounded-md flex items-center md:w-80 '>
                    <img className='mx-2' src={suitcase} alt="" />
                    <input className='h-12 w-full rounded-md focus:outline-none text-sm ' type="text" placeholder='Search your required service here' />
                    </div>

                    <div className=' bg-white w-72 rounded-md flex items-center md:w-80 '>
                    <img className='mx-2' src={location} alt="" />
                    <input className='h-12 w-full rounded-md focus:outline-none text-sm' type="text" placeholder='Search your desired location here' />
                    </div>
                    <input className="bg-green-700 px-4 py-3 rounded-md text-white cursor-pointer transition-all duration-200 hover:bg-white  hover:text-green-600" type="submit" value="Search"/>
                </form>
            </div>
            <h2 className='text-white text-center text-lg'>Are you a buyer?   <span  className='font-extralight underline underline-offset-4 mx-2'><br></br> <a href="">Click here if you are looking to post a requirements</a></span></h2>
        </div>
    </section>
    </>
  )
}

export default HeroSection
