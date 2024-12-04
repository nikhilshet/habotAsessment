import React, { useState } from 'react'
import check from '../assets/images/Icons/check.svg'

    const steps = [
        {
            title:"Buyer",
            list:["Post your requirements.",
                  "Sit back for multiple suppliers to contact you.",
                  "Choose among the suppliers based on the ratings and reviews."]
        },
        {
            title:"Supplier",
            list:["Complete your profile and get verified.",
                  "Select service tags for relevant opportunities.",
                  "Reach out to buyers and expand your business."]
        },

    ]

   
    
function VideoDemo() {  
    const [currentList , setCurrentList] = useState(0)

    const list = steps.map((ele , index)=>{
        return(
        <div className='w-full h-full'>
            <p className={`relative text-lg cursor-pointer text-center pb-2 font-bold ${currentList === index ?
             "border-b-2 border-[#EB7150] text-[#EB7150]" : "text-white"} `} key={index} onClick={()=>{handleClick(index)}}>{ele.title}</p>
        </div>


        )
    })
    
    const subList = steps[currentList].list.map((ele , index)=>{
        return(
            <div key={index} className='flex items-baseline'>
                <img className='w-4 mr-2' src={check} ></img>
                <p className='text-sm text-white font-medium m-2' key={index}>{ele}</p>
            </div>

        )
    })



    function handleClick(id){
        setCurrentList(id)
    }
    

    
  return (
    <>
      <section className='mx-12 mb-24 py-16 flex flex-col items-center bg-[#072F57] rounded-xl lg:flex-row lg:px-12 lg:grid lg:grid-cols-2'> 

            <div className="w-48 h-32 bg-black mb-4 sm:w-64 sm:h-40 md:w-96 md:h-72">
                <iframe
                    className="w-full h-full"
                    src="https://www.youtube.com/embed/IZLp-TZyDkQ"
                    title="YouTube video"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                ></iframe>
        </div>
        <div className='w-[90%] space-y-10 place-content-center '>

            <div className='flex justify-evenly'> 
                {list}  
            </div>

            <div className='flex min-h-[150px] flex-col px-4 '>
                {subList}
            </div>
        </div>
        
     </section> 
     
    </>
  )
}

export default VideoDemo
