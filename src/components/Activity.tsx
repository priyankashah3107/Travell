
import { Mountain, Star, TentIcon } from 'lucide-react'
import React from 'react'

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
    <div className="absolute bg-[#17C3B2] text-white mt-96 lg:mt-0 t"> 
        
        <div>
          {activity.map((val, idx) => (
            <div key={idx}> 
              <h4>{val.name}</h4>
              <h1>{val.titl}</h1>
              <p>{val.desc}</p>
            </div>
          ))}
        </div>
        <div>icons</div>
    </div>
  )
}

export default Activity


