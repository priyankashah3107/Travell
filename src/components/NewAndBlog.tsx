import { ArrowRight } from 'lucide-react'
import React from 'react'
import Image from 'next/image'
import { Button } from './ui/button'

interface News {
  id: number,
  image: string,
  loc: string,
  title: string,
  desc: string, 
  article: string,
  icon: React.ReactNode
}

interface Blog {
  id: number,
  image: string,
  about: string,
  date: string
}

const news: News[] = [
   {
    id: 1,
    image: "/tibat.png",
    loc: "AISA",
    title: "Unveiling the Enchanting Beauty of Kyoto",
    desc: "Join us on a virtual journey to one of Japan's most captivating cities – Kyoto. In our latest blog post, we'll immerse you in the mesmerizing world of ancient temples, tranquil gardens, and the timeless traditions that define this cultural gem.", 
    article: "Read full article",
    icon: <ArrowRight />
   }
]


const blog: Blog[] = [
  {
    id: 1,
    image: "/bhudda.png",
    about: "Exploring the Enigmatic Wonders of Southeast Asia: A Journey of Discovery Through Ancient Temples and Lush Jungles",
    date: "19 SET 2023"
  },

  {
    id: 2,
    image: "/mout.png",
    about: "Epic Adventures: From Machu Picchu to the Amazon Rainforest - Exploring the Heart of South America's Natural Beauty and Cultural Riches",
    date: "10 MAY 2023"
  },
  {
    id: 3,
    image: "/metro.png",
    about: "Chasing Sunsets: A Journey through Europe's Most Romantic Cities - Unveiling the Allure of Historic Charm and Modern Elegance",
    date: "20 JUL 2023"
  },
  {
    id: 4,
    image: "/mouta.png",
    about: "Off the Beaten Path: Uncovering Hidden Gems in South America - From Remote Villages to Pristine Wilderness, the Ultimate Exploration",
    date: "15 JUN 2023"
  },
  
  
]

const NewAndBlog: React.FC = () => {
  return (
    <div className="bg-white text-[#333333] p-4 lg:p-16 mt-10 w-screen ">
      <div>
        <h4 className="text-[#17c3b2] text-sm lg:text-lg font-medium font-['DM Sans'] uppercase leading-[30px]">Exploring</h4>
        <h1 className="text-[35px] lg:text-[50px] font-semibold font-['Playfair_Display'] leading-[35px] lg:leading-[60px] mb-4">News and Blog</h1>
      </div>

<div className='flex flex-col lg:flex-row '>
      <div>
        {news.map((val, idx) => (
          <div key={idx} className="flex flex-col gap-2 lg:gap-4">
            <Image src={val.image}  alt="img" width={550} height={370} className="w-screen h-[370px] lg:w-[550px] lg:h-[370px] cursor-pointer" />
            <h4 className="text-[#17c3b2] text-lg  font-semibold font-['DM Sans'] uppercase leading-snug">{val.loc}</h4>
            <h2 className="text-[25px] lg:text-[28px] font-bold font-['Roboto'] leading-[33px]">{val.title}</h2>
            <p className="text-black text-xl font-normal font-['Roboto'] leading-[27px] lg:leading-normal">{val.desc}</p>

            <Button className="bg-white text-[#17C3B2] hover:bg-[#00897b] hover:text-[#fff] border border-[#17C3B2] mb-10 lg:mb-0 mt-6 w-44">{val.article}{val.icon}</Button>
          </div>
        ))}
      </div>

      <div>
        <div className="flex flex-col gap-4  lg:gap-12">
          {blog.map((val, idx) => (
           <div key={idx} className="flex flex-row gap-4 lg:gap-6">
            <Image src={val.image} alt='img' width={100} height={100} className='size-[100px] cursor-pointer' />
            <div className='flex flex-col gap-2 lg:gap-3'>
            <p className=" text-[15px] lg:text-lg font-medium font-['Roboto'] leading-[18px] lg:leading-snug">{val.about}</p>
            <time className=" text-[#17C3B2] text-sm font-bold font-['DM Sans'] leading-[16px] lg:leading-tight">{val.date}</time>
            </div>
            
           </div>
        ))}
        </div>
        <Button className="bg-white text-[#17C3B2] hover:bg-[#00897b] hover:text-[#fff] border border-[#17C3B2] mb-10 lg:mb-0 mt-6 w-44 cursor-pointer">See All Articles <ArrowRight /></Button>
      </div>
    </div>
    </div>
  )
}

export default NewAndBlog