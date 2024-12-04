import React from 'react'

function Working() {
    const data = [
        {
         
            desc:"Select Your Role and Sign Up"
        },
        {
         
            desc:"Buyers Post Your Requirements"
        },
        {
          
            desc:" Review, Select, and Contact the Best Suppliers"
        },
        {
         
            desc:" Suppliers Complete your profile and get notified for opportunities"
        },
        {
        
            desc:"Contact to Buyers and Share your Quote for the service"
        },
        {
         
            desc:"Both the Parties can Connect and Make Business Leave a Feedback"
        },
    ] 

    const box = data.map((ele , index)=>{
        const flag = (index + 1) % 2 === 0
        return(
            
            <div className={`w-92 h-72 p-12 grid grid-rows-2   ${flag ? "bg-white" : "bg-[#E8FBFF]"}`} key={index}>
                <img className='place-self-center' src={`../${index + 1}.svg`} alt="" />
                <p className='place-self-center text-center'>{ele.desc}</p>
            </div>
        )
    })
  return (
     <>
         <section className='w-full flex flex-col justify-center items-center mb-24'>
           <h2 className='text-center text-3xl font-bold mb-8'>How it works?</h2>
           <p className='w-[90%] text-center leading-7 text-md mb-12  lg:w-1/2 lg:text-xl'>Buyers post their needs and review top suppliers, while suppliers complete profiles, connect with potential buyers, and build successful business relationships, sharing valuable feedback.</p>
            <div className='mx-12 grid sm:grid-cols-2 lg:grid-cols-3 lg:px-24 xl:px-48'>
              {box} 
            </div>
        </section> 
    </>
  )
}

export default Working
