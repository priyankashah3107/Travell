
import { Mountain, Star, TentIcon } from 'lucide-react'
import React from 'react'
import Image from 'next/image'
import Destination from "../components/Destination"
import NewAndBlog from './NewAndBlog'
import TopDeals from './TopDeals'
import HappyClient from './HappyClient'
const activity = [
  {
    id: 1,
    name: "Tour Types",
    titl: "Adventure & Activity",
    desc: "Explore thrilling destinations that will get your heart racing. From rugged mountains to dense jungles, embark on unforgettable journeys that will test your limits and create lasting memories. Dive into the unknown, conquer nature's challenges, and write your own epic tale of adventure."
  }
]

const adven = [
  {
      id: 1,
      icon: "/camping.svg",
      name: "Camping",
      desc: "13 nature escapes, tents, RVs, cabins, outdoor experiences"
  },

  {
    id: 2,
    icon: "/tenda.svg",
    name: "Trekking",
    desc: "Breathtaking landscapes, hidden trails, remote villages, natural beauty"
},

{
  id: 3,
  icon: "/fire.svg",
  name: "Camp Fire",
  desc: "7 unique destinations, marshmallow roasting, nature connection"
},
{
  id: 4,
  icon: "/mapp.svg",
  name: "Exploring",
  desc: "25 diverse destinations, historical cities, hidden gems, unique charm"
},



]

const Activity: React.FC = () => {
  return (
    <div className="absolute  text-white w-screen "> 
        
        <div className='bg-[#17C3B2] '>
          {activity.map((val, idx) => (
            <div key={idx} className='p-4 lg:p-14'> 
              <h4 className="text-[#0E3D4D] text-xl font-medium lg:font-medium font-['DM Sans'] uppercase leading-[30px]">{val.name}</h4>
              <h1 className="text-[40px] lg:text-[50px] font-semibold font-['Playfair_Display'] leading-[44px] lg:leading-[75px]">{val.titl}</h1>
              <p className="text-[#0E3D4D] text-lg lg:text-xl font-normal font-['Roboto'] leading-[27px] lg:leading-[30px]">{val.desc}</p>
            </div>
          ))}
        </div>
        
        <div className="p-4 lg:p-14 flex flex-col lg:flex-row bg-[#17C3B2]">
          {adven.map((val, idx) => (
             <div key={idx} className='flex flex-col items-center  text-center'>
              <Image src={val.icon} alt="img" width={50} height={80} />

              <h1 className=" text-3xl text-center lg:text-left lg:text-4xl font-bold font-['Playfair_Display'] leading-[45px] lg:leading-[54px]">{val.name}</h1>
              <p className=" text-[#073D37] text-lg lg:text-xl font-normal font-['Roboto'] leading-[27px] lg:leading-[30px]">{val.desc}</p>
             </div>
          ))}
        </div>
        <Destination />
        <NewAndBlog />
        <TopDeals />
        <HappyClient />
    </div>
    
  )
}

export default Activity


