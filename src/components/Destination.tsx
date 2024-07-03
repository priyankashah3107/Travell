
import React from 'react'
import "@/index.css"

const advan = [
  {
    id: 1,
    photo: "/pyramid.png",
    name: "Cairo",
    icon: "/egypt_ico.svg",
    loc: "EGYPT",
    price: "Price starts at €105.00",
    stars: {
      yellow: "/yellow.svg",
      white: "/white.svg"
    }
  },

  {
    id: 2,
    photo: "/Paris.png",
    name: "Paris",
    icon: "/france_icon.svg",
    loc: "FRANCE",
    price: "Price starts at €95.00",
    stars: {
      yellow: "/yellow.svg",
      white: "/white.svg"
    }
  },

  {
    id: 3,
    photo: "/Rome.png",
    name: "Rome",
    icon: "/italy_icon.svg",
    loc: "ITALY",
    price: "Price starts at €75.00",
    stars: {
      yellow: "/yellow.svg",
      white: "/white.svg"
    }
  },

  {
    id: 4,
    photo: "/Madrid.png",
    name: "Madrid",
    icon: "/spain_icon.svg",
    loc: "ESPAIN",
    price: "Price starts at €87.00",
    stars: {
      yellow: "/yellow.svg",
      white: "/white.svg"
    }
  },
]

const Destination = () => {
  return (
    <div className="activity-container">
    {advan.map((activity) => (
      <div className="activity-card" key={activity.id}>
        <img src={activity.photo} alt={activity.name} className="activity-photo" />
        <div className="activity-content">
          <img src={activity.icon} alt="icon" className="activity-icon" />
          <h1 className="activity-name">{activity.name}</h1>
          <p className="activity-location">{activity.loc}</p>
          <p className="activity-price">{activity.price}</p>
          <div className="activity-stars">
            {[...Array(4)].map((_, i) => (
              <img key={i} src={activity.stars.yellow} alt="yellow star" className="star-icon" />
            ))}
            <img src={activity.stars.white} alt="white star" className="star-icon" />
          </div>
        </div>
      </div>
    ))}
  </div>
  )
}

export default Destination
