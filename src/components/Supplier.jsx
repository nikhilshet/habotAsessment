import React from 'react'

function Supplier() {
  return (
    <>
        <section className='w-full bg-[#E8FBFF] mb-24 py-24 flex flex-col justify-between items-center xl:flex-row xl:px-32 '>
            <h2 className='text-3xl mb-12 font-semibold xl:text-4xl'>Let Suppliers&nbsp; 
                <span className='relative after:absolute after:left-0 after:bottom-0 after:w-full after:h-1 after:bg-[#EB7150] inline-block'>Find You</span>
            </h2>

            <button className='bg-[#EB7150] text-white text-lg rounded-lg px-3 py-2 xl:px-6 xl:py-4'>Get Verified</button>
        </section>
    </>
  )
}

export default Supplier
