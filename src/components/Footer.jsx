import React from 'react'
import logo from '../assets/images/logoW.svg'
function Footer() {
    const footerData = [
        {   title : "Company",
            list:["About","FAQ"]
        },
        {   
            title : "Terms",
            list:["Data privacy","Terms" , "Accessibility"]
        },
         {
            title : "Related",
            list:["Find Buyer","Feedback"]
        },
    ]

    const link = ["linkedin","twitter","facebook" , "instagram"]
             
    
    // const contactList = footerData.Company.list.map((ele , index)=>{
    //     return(
    //     <li className='text-white' key={index}>{ele}</li> 
    //     )
    // })

    // const termsList = footerData.Terms.list.map((ele , index)=>{
    //     return(
    //     <li className='text-white' key={index}>{ele}</li> 
    //     )
    // })

    // const relatedList = footerData.Related.list.map((ele , index)=>{
    //     return(
    //     <li className='text-white' key={index}>{ele}</li> 
    //     )
    // })

    // const linkButtons = footerData.Links.list.map((ele , index)=>{
    //     return(
    //     <button className='w-12 h-12 text-white rounded-full bg-black' key={index}>f</button> 
    //     )
    // })

    const arr = footerData.map((ele , index)=>{

        return(
            <div className= "text-white" key={index}>
                <p className='font-bold font-arial mb-3' >{ele.title}</p>
              {
                ele.list.map((list , index)=>{
                    return(
                        <p className='font-inter font-extralight text-sm leading-loose cursor-pointer hover:underline underline-offset-2' key={index}>{list}</p>
                    )
                })
              }
            </div>
        )
    })

    const buttons = link.map((ele , index)=>{
        return(
            <button key={index} className='relative w-12 h-12 rounded-full flex  justify-center items-center border-1 transition-all duration-200 hover:bg-white hover:bg-opacity-10 '>
                <img  src={`../${ele}.svg`} alt="" />
            </button>
        )
    })
    
    
  return (
    <>
        <footer className='relative bottom-0 bg-[#123557] py-12 flex justify-center '> 
            
                <div className=' w-2/3 border-t-1 border-b-1 flex flex-col justify-center items-center space-y-12 py-12 lg:flex-row lg:justify-between'>

                    <div className='flex flex-col space-y-12 items-center lg:justify-center lg:flex-row lg:space-x-12 lg:items-center'>
                        <div className='flex flex-col items-center justify-center'>
                            <img className= 'w-44' src={logo}></img>
                             <h3 className='text-white font-extralight'>© R Singhania</h3> 
                        </div>

                        <div className='flex space-x-8 '>
                            {arr}                        
                        </div>
                    </div>


                    <div className='flex space-x-4 '>
                        {buttons}
                    </div>

                </div>
      
               
            
        </footer>
    </>
  )
}

export default Footer
