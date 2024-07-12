import React from 'react'
import Image from 'next/image'

interface TopDeals {
  id: number,
  image: string,
  loc: string, 
  price: string, 
  stars: string
}

const topdeals: TopDeals[] = [
  {
    id: 1,
    image: "/Milan.png",
    loc: "Holidays Suites Navona - ITALY",
    price: "€149,00",
    stars: "Price stars from"
  },

  {
    id: 2,
    image: "/Hotel.png",
    loc: "Kantua hotel - THAILAND",
    price: "€99,00",
    stars: "Price stars from"
  },

  {
    id: 3,
    image: "/madraid.png",
    loc: "NH Madrid Zurbano - MADRID",
    price: "€89,00",
    stars: "Price stars from"
  },

  {
    id: 4,
    image: "/hong.png",
    loc: "Royal Plaza Hotel - HONG KONG",
    price: "€89,00",
    stars: "Price stars from"
  },
  {
    id: 5,
    image: "/taj.png",
    loc: "Le Meridien - ABU DHABI",
    price: "€109,00",
    stars: "Price stars from",
    
  },

]



const TopDeals: React.FC = () => {
  return (
    <div className="p-4 lg:p-16">
      <div className='text-[#333333] '>
        <h4 className=" text-[#17c3b2] lg:text-xl font-medium font-['DM Sans'] uppercase leading-[30px]">Best Offers</h4>
        <h1 className="text-[35px] lg:text-[50px] font-semibold font-['Playfair_Display'] mb-4 leading-[35px] lg:leading-[60px]">Top Deals and Discounts</h1>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4'>
        <div className='relative'>
        <Image src={"/Milan.png"} alt={"Milan"} width={357} height={357}  className='lg:w-[900px] h-[357px] size-[350px]'/>
        <div className="absolute bottom-0 p-4 text-white">
              <h3 className="text-[#17c3b2] text-xl font-bold font-['Roboto'] leading-tight">Holidays Suites Navona - ITALY</h3>
              <div className='flex flex-row gap-4 items-center'>
              <h1 className="text-white  text-3xl lg:text-[32px] font-black lg:font-bold font-['Roboto']">€149,00</h1>
              <p className="text-teal-500 text-sm font-bold font-['Roboto']">Price stars from</p>
              </div>
             
            </div>
        </div>

        <div className='relative lg:ml-56'>
        <Image src={"/Hotel.png"} alt={"Milan"} width={357} height={357}  className=' size-[350px]'/>
        <div className="absolute bottom-0 p-4 text-white">
              <h3 className="text-[#17c3b2] text-xl font-bold font-['Roboto'] leading-tight" >Kantua hotel - THAILAND</h3>
              <div className='flex flex-row items-center gap-4'>
              <h1 className="text-white  text-3xl lg:text-[32px] font-black lg:font-bold font-['Roboto']">€99,00</h1>
              <p className="text-teal-500 text-sm font-bold font-['Roboto']">Price stars from</p>
              </div>
             
            </div>
        </div>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-2 mt-4'>
        {topdeals.slice(2).map((val) => (
          <div key={val.id} className='relative'>
            <Image src={val.image} alt={val.loc} width={357} height={357} />
            <div className="absolute bottom-0 p-4 text-white">
              <h3 className="text-[#17c3b2] text-xl font-bold font-['Roboto'] leading-tight">{val.loc}</h3>
              <div className='flex flex-row gap-4 items-center'>
              <h1 className="text-white  text-3xl lg:text-[32px] font-black lg:font-bold font-['Roboto']">{val.price}</h1>
              <p className="text-teal-500 text-sm font-bold font-['Roboto']">{val.stars}</p>
              </div>
              
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TopDeals;