import React from 'react'
import "@/index.css"
import Image from 'next/image'

interface Foo {
  id: number,
  call: string,
  phone?: string, // Optional because not all entries have phone numbers
  icons?: {
    [key: string]: string // Using an index signature to allow different keys for icons
  }
}

interface Company {
  id: number,
  name: string,
}

interface Support {
  id: number,
  name: string
}

interface Services {
  id: number, 
  name: string,
}

interface TopCities{
  id: number, 
  name: string
}

const foo: Foo[] = [
   {
    id: 1,
    call: "Call 24/7 for any help",
    phone: "+00 123 456 789"
   },
   {
    id: 2,
    call: "Mail to our support team",
    phone: "support@domain.com"
   },
   {
    id: 3,
    call: "Follow us on",
    icons:{
        facebook: "/facebook.svg",
        instagram: "/instagram.svg",
        twitter: "/twitter.svg",
        youtube: "/youtube.svg",
      },
   }
]

const company: Company[] = [
  { id: 1, name: "About Us" },
  { id: 2, name: "Testimonials" },
  { id: 3, name: "Rewards" },
  { id: 4, name: "Work with Us" },
  { id: 5, name: "Meet the Team" },
  { id: 6, name: "Blog" },
]

const support: Support[] = [
  { id: 1, name: "Account" },
  { id: 2, name: "Faq" },
  { id: 3, name: "Legal" },
  { id: 4, name: "Contact" },
  { id: 5, name: "Affiliate Program" },
  { id: 6, name: "Privacy Policy" },
]

const services: Services[] = [
  { id: 1, name: "Community Program" },
  { id: 2, name: "Investor Relations" },
  { id: 3, name: "Rewards Program" },
  { id: 4, name: "Points Plus" },
  { id: 5, name: "Partners" },
  { id: 6, name: "List My Hotel" },
]

const topcities: TopCities[] = [
  { id: 1, name: "Rome" },
  { id: 2, name: "Madrid" },
  { id: 3, name: "New York" },
  { id: 4, name: "Hong Kong" },
  { id: 5, name: "Paris" },
  { id: 6, name: "Tokyo" },
]

const Footer = () => {
  return (
    <div className="bg-[#073D37] lg:bg-[#f5f5f5] text-white lg:text-[#666666] flex flex-col lg:flex-row justify-between p-4 lg:p-16">
      <div className="text-center flex flex-col justify-center items-center mb-14 cursor-pointer">
        <b>NEED ANY HELP?</b>
        <div className=''>
          {foo.slice(0, 1).map((val) => (
            <div key={val.id} className="flex flex-col mt-4">
              <p className="lg:text-[#666666] text-base font-normal font-['Roboto']">{val.call}</p>
              <p className="text-teal-500 text-[22px] font-medium font-['Roboto']">{val.phone}</p>
            </div>
          ))}
        </div>
        
        {foo.slice(1, 1).map((val) => (
          <div key={val.id} className="flex flex-col mt-4">
            <h3 className="lg:text-[#666666] text-base font-normal font-['Roboto']">{val.call}</h3>
            <p className="text-teal-500 text-[22px] font-medium font-['Roboto']">{val.phone}</p>
          </div>
        ))}

        {foo.slice(2, 3).map((val) => (
          <div key={val.id} className="flex flex-col mt-4 gap-4 lg:gap-2 cursor-pointer">
            <h3 className="lg:text-[#666666] text-base font-normal font-['Roboto']">{val.call}</h3>
            <div className="flex space-x-2">
              {val.icons && Object.entries(val.icons).map(([key, icon]) => (
                <Image key={key} src={icon} width={24} height={24} alt={`${key} icon`} className="w-6 h-6" />
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className='grid grid-cols-2 lg:grid-cols-4 gap-16 md:pl-10 lg:gap-20'>
        <div>
          <h1 className="text-[#17c3b2] lg:text-black text-lg font-medium font-['Roboto'] uppercase leading-[45px] cursor-pointer">COMPANY</h1>
          {company.map((val) => (
            <div key={val.id}>
              <p className="text-white lg:text-[#666666] hover:text-[#17c3b2] text-base font-normal font-['Roboto'] leading-[33.60px] cursor-pointer">{val.name}</p>
            </div>
          ))}
        </div>

        <div>
          <h1 className="text-[#17c3b2] lg:text-black text-lg font-medium font-['Roboto'] uppercase leading-[45px] cursor-pointer">SUPPORT</h1>
          {support.map((val) => (
            <div key={val.id}>
              <p className="text-white lg:text-[#666666] hover:text-[#17c3b2] text-base font-normal font-['Roboto'] leading-[33.60px] cursor-pointer">{val.name}</p>
            </div>
          ))}
        </div>

        <div>
          <h1 className="text-[#17c3b2] lg:text-black  text-lg font-medium font-['Roboto'] uppercase leading-[45px] cursor-pointer">SERVICES</h1>
          {services.map((val) => (
            <div key={val.id}>
              <p className="text-white lg:text-[#666666] hover:text-[#17c3b2] text-base font-normal font-['Roboto'] leading-[33.60px] cursor-pointer">{val.name}</p>
            </div>
          ))}
        </div>

        <div>
          <h1 className="text-[#17c3b2] lg:text-black  text-lg font-medium font-['Roboto'] uppercase leading-[45px] cursor-pointer">TOP CITIES</h1>
          {topcities.map((val) => (
            <div key={val.id}>
              <p className="text-white lg:text-[#666666] hover:text-[#17c3b2] text-base font-normal font-['Roboto'] leading-[33.60px] cursor-pointer">{val.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Footer
