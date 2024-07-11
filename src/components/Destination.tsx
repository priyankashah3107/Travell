
import React from 'react'
import "@/index.css"
import MyCard from './MyCard'


const descr = [
  {
    id: 1,
    name: "Where to go",
    title: "Popular destinations",
    desc: "Explore our curated selection of the world's most sought-after travel spots in this diverse list of must-visit places. From iconic cities to pristine natural wonders, we've gathered the best destinations to ignite your wanderlust."
  }
]





const Destination = () => {
 
  return (
    <div className="bg-white w-screen">
         
         <div>
          {descr.map((val, idx) => (
             <div className="text-[#333333] p-4 lg:p-14 " key={idx}>
              <h4 className="uppercase text-[#17C3B2] text-lg lg:text-xl font-medium font-['DM Sans'] leading-[27px] lg:leading-[30px]">{val.name}</h4>

              <h1 className="text-[35px] lg:text-[50px] font-semibold font-['Playfair_Display'] leading-[35px] lg:leading-[60px]">{val.title}</h1>
              <p className="text-lg lg:text-xl font-normal font-['Roboto'] leading-[27px] lg:leading-[30px]">{val.desc}</p>
             </div>
          ))}
         </div>


           <div className='text-black'>
            <MyCard />
           </div>
    </div>
  )
}

export default Destination