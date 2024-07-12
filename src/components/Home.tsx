// import Image from 'next/image'
// import React from 'react'
// import NavBar from './NavBar'
// import "../index.css"

// // const HomeData = [
// //   {
// //     id: 1,
// //     data: "Welcome to the World of Extraordinary Travel"
// //   },
// //   {
// //     id: 2,
// //     data: "If you're in search of exciting adventures, unforgettable experiences, and breathtaking places to explore, you've come to the right place!"
// //   }
// // ]

// {/* <Menu />
//       <Cross /> */}

// const Home = () => {
//   return (
//     <>
//      <section className=''>
//         <div className='container  relative'>
//             <NavBar />
//             <Image src={'/homee.png'} alt='img' width={2560} height={1000} className='w-full img' />
              
//               <div className='absolute items-center top-10 left-10  md:top-44 lg:left-1/3  text-white'>

//                  <h1 className=" sm:text-[44px] lg:text-[69.17px] font-bold font-['Playfair_Display'] sm:leading-[30px] md:leading-[42px] lg:leading-[76px] ">Welcome to the World <span>of Extraordinary Travel</span></h1>
//                  <p className="  text-md lg:text-[22px] font-normal font-['Roboto'] sm: leading-[20px] lg:leading-[33px] mt-3">If you're in search of exciting adventures, unforgettable experiences, and <br /> <span> breathtaking places to explore, you've come to the right place!
//                   </span></p>
//               </div>
//         </div>
//      </section>
//     </>
//   )
// }

// export default Home




import Image from 'next/image';
import React from 'react';
import NavBar from './NavBar';
import "../index.css";
import InputDemo from './InputDemo';
import Activity from './Activity';

const Home: React.FC = () => {
  return (
    <>
      <section className='relative w-screen'>
        <div className="mx-auto">
          <NavBar />
          <div className='relative w-full h-screen'>
            <Image src={'/homee.png'} alt='img' layout='fill' objectFit='cover' className='img' />
            <div className='absolute top-1/4 left-1/2 transform -translate-x-1/2 text-white text-center'>
              <h1 className="text-4xl lg:text-6xl font-bold font-['Playfair_Display']">
                Welcome to the World <span>of Extraordinary Travel</span>
              </h1>
              <p className="mt-3 text-base lg:text-xl font-normal font-['Roboto']">
                If you<p>&#39</p>re in search of exciting adventures, unforgettable experiences, and <br  className='hidden'/>
                <span>breathtaking places to explore, you &lsquo ve come to the right place!</span>
              </p>
            </div>
          </div>
          <InputDemo />
          {/* <Activity /> */}
        </div>
      </section>
    </>
  );
};

export default Home;
