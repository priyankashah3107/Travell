import { Quote } from 'lucide-react'
import React from 'react'
import Image from 'next/image'

const clients = [
  {
    id: 1,
    image: "/women.png",
    quote: <Quote />,
    desc: "“Sarah, a local resident, possesses a profound connection to this region. Having once served as a host, she intimately comprehends the significance of having someone dedicated to managing every intricate detail, ensuring a seamless experience for all.”",
    stars: { 
        yellow: "/yellow.svg",
        white: "/white.svg"
      },
    rate: "4/5",
    name: "Oliver Mitchell",
    post: "Landscape Architect"
  },
  {
    id: 2,
    image: "/men.png",
    quote: <Quote />,
    desc: "“Liam, born and raised in this locale, has an innate connection to the area. With a background as a host himself, he fully appreciates the necessity of having someone who can attend to all the small but essential aspects, making every moment memorable.”",
    stars: { 
        yellow: "/yellow.svg",
        white: "/white.svg"
      },
    rate: "5/5",
    name: "Isabel Rose",
    post: "Manager"
  }
]

const HappyClient = () => {
  return (
    <div className='text-[#333333] p-4 lg:p-16'>
      <h1 className="text-[#333333] opacity-90 text-[35px] lg:text-[50px] font-semibold font-['Playfair_Display'] leading-[42px] lg:leading-[60px] mt-7 lg:mt-0">Happy Client Stories</h1>
      <div className='grid lg:grid-cols-2 items-center text-center  '>
        {clients.map((client) => (
          <div key={client.id} className='flex flex-col justify-center items-center relative '>
            <Image src={client.image} alt='img' width={120} height={120} className='size-[120px] ' />
            <div className=" absolute left-6 top-20 lg:top-24  lg:left-10 text-center text-teal-500 opacity-50 text-[150px] font-normal font-['Ultra'] leading-[150px]">“</div>

            <p className="lg:m-8  lg:mt-2  text-[15px] lg:text-lg font-normal font-['Roboto'] leading-snug lg:leading-[27px]">{client.desc}</p>
            <div className='flex gap-2 mt-4 mb-4'>
              {[...Array(4)].map((_, i) => (
                <Image key={i} src={client.stars.yellow} alt="yellow star" width={24} height={24} />
              ))}
              <Image src={client.stars.white} alt="white star" width={24} height={24} />
            </div>
            <h2 className="text-lg font-bold font-['Roboto'] leading-tight">{client.name}</h2>
            <p className="mb-6 lg:mb-0 text-[#aaaaaa] opacity-90 lg:text-lg font-normal font-['Roboto'] leading-tight">{client.post}</p>

          </div>
        ))}
      </div>
    </div>
  )
}

export default HappyClient
