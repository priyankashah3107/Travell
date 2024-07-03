import { Quote } from 'lucide-react'
import React from 'react'

const clients = [
  {
    id: 1,
    image: "/women.png",
    quote: <Quote />,
    desc: "“Sarah, a local resident, possesses a profound connection to this region. Having once served as a host, she intimately comprehends the significance of having someone dedicated to managing every intricate detail, ensuring a seamless experience for all.”",
    stars: [
      {
        id:1,
        star: "/yellow.png" 
      },
      {
        id:2,
        star: "/white.png" 
      },
    ],
    rate: "4/5",
    name: "Oliver Mitchell",
    post: "Landscape Architect"
  },
  {
    id: 1,
    image: "/men.png",
    quote: <Quote />,
    desc: "“Liam, born and raised in this locale, has an innate connection to the area. With a background as a host himself, he fully appreciates the necessity of having someone who can attend to all the small but essential aspects, making every moment memorable.”",
    star: "/yellow.png",
    rate: "5/5",
    name: "Isabel Rose",
    post: "Manager"
  }
]

const HappyClient = () => {
  return (
    <div>HappyClient</div>
  )
}

export default HappyClient