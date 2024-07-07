import Image from 'next/image'
import React from 'react'
import NavBar from './NavBar'
import "../index.css"

// const HomeData = [
//   {
//     id: 1,
//     data: "Welcome to the World of Extraordinary Travel"
//   },
//   {
//     id: 2,
//     data: "If you're in search of exciting adventures, unforgettable experiences, and breathtaking places to explore, you've come to the right place!"
//   }
// ]

{/* <Menu />
      <Cross /> */}

const Home = () => {
  return (
    <>
     <section className=''>
        <div className='container  relative'>
            <NavBar />
            <Image src={'/homee.png'} alt='img' width={2560} height={1000} className='w-full img' />
              
              <div className='absolute items-center top-10 left-10  md:top-44 lg:left-1/3  text-white'>

                 <h1 className=" sm:text-[44px] lg:text-[69.17px] font-bold font-['Playfair_Display'] sm:leading-[30px] md:leading-[42px] lg:leading-[76px] ">Welcome to the World <span>of Extraordinary Travel</span></h1>
                 <p className="  text-md lg:text-[22px] font-normal font-['Roboto'] sm: leading-[20px] lg:leading-[33px] mt-3">If you're in search of exciting adventures, unforgettable experiences, and <br /> <span> breathtaking places to explore, you've come to the right place!
                  </span></p>
              </div>
        </div>
     </section>
    </>
  )
}

export default Home