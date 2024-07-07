import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import "../index.css"
const navLinks = [
  {
    id: 1,
    name: "Home",
    href: "#"
  },
  {
    id: 2,
    name: "Tour",
    href: "#"
  },
  {
    id: 3,
    name: "Blog",
    href: "#"
  },
  {
    id: 4,
    name: "Pages",
    href: "#"
  },
  {
    id: 1,
    name: "Contact",
    href: "#"
  }
]

const NavBar = () => {
  return (
    <>
    <nav className="absolute top-0 left-0 lg:left-20 mt-2  text-white ">
       <div className='twoChild  flex flex-row items-center  gap-10 justify-between p-4 pl-24 '>
          
          <div className="log flex flex-row  items-center">
            <Image src={"/logo.svg"} alt='img' width={32} height={38} className='size-6 lg:size-14' />
            <h1 className="text-xl font-normal  lg:text-[37px] lg:font-bold font-['DM Sans'] "> <span className="text-[#17C3B2]">Eden</span>Travel</h1>
          </div>

          <div className="  flex flex-row gap-4 ml-96">
            {navLinks.map((data, id) => (
              <div key={id}>
                <Link href={data.href} className='links'> {data.name} </Link>
              </div>
            ))}
          </div>

       </div>
    </nav>
    </>
    
  )
}

export default NavBar