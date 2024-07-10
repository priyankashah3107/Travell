"use client"

import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import "../index.css";

interface NavLink {
  id: number;
  name: string;
  href: string;
}

const navLinks: NavLink[] = [
  { id: 1, name: "Home", href: "#" },
  { id: 2, name: "Tour", href: "#" },
  { id: 3, name: "Blog", href: "#" },
  { id: 4, name: "Pages", href: "#" },
  { id: 5, name: "Contact", href: "#" }
];

const NavBar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="absolute top-0 left-0 w-screen text-white z-50 bg-transparent lg:pl-20">
      <div className='container mx-auto flex flex-row items-center justify-between p-4'>
        <div className="flex flex-row items-center">
          <Image src={"/logo.svg"} alt='img' width={22} height={28} className='w-8 h-auto ' />
          <h1 className="text-xl font-normal lg:text-3xl lg:font-bold font-['DM Sans']">
            <span className="text-[#17C3B2]">Eden</span>Travel
          </h1>
        </div>
        <div className="hidden lg:flex flex-row gap-4 mr-12">
          {navLinks.map((data) => (
            <div key={data.id}>
              <Link href={data.href} className='links'> {data.name} </Link>
            </div>
          ))}
        </div>
        <div className="lg:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)} className="focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
        </div>
      </div>
      {menuOpen && (
        <div className="lg:hidden flex flex-col items-center bg-black bg-opacity-75 p-4 absolute top-full left-0 w-full">
          {navLinks.map((data) => (
            <Link key={data.id} href={data.href} className='links py-2'> {data.name} </Link>
          ))}
        </div>

      )}
    </nav>
  );
};

export default NavBar;
