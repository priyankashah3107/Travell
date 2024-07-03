import { ArrowRight } from 'lucide-react'
import React from 'react'

const news = [
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


const blog = [
  {
    id: 1,
    image: "/bhudda.png",
    about: "Exploring the Enigmatic Wonders of Southeast Asia: A Journey of Discovery Through Ancient Temples and Lush Jungles",
    date: "19 SET 2023"
  },

  {
    id: 2,
    image: "/mount.png",
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
    image: "/mounta.png",
    about: "Off the Beaten Path: Uncovering Hidden Gems in South America - From Remote Villages to Pristine Wilderness, the Ultimate Exploration",
    date: "15 JUN 2023"
  },
  
  
]

const NewAndBlog = () => {
  return (
    <div>NewAndBlog</div>
  )
}

export default NewAndBlog