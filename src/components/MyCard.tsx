"use client"
import React, { useRef } from 'react';
import Image from 'next/image';
import { ArrowLeftCircle, ArrowRightCircle } from 'lucide-react';
import "@/index.css";

interface Destination {
  id: number;
  photo: string;
  name: string;
  icon: string;
  loc: string;
  price: string;
  stars: {
    yellow: string;
    white: string;
  };
}

const destinations: Destination[] = [
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
    loc: "SPAIN",
    price: "Price starts at €87.00",
    stars: {
      yellow: "/yellow.svg",
      white: "/white.svg"
    }
  },

  
];

const MyCard: React.FC = () => {
  const carouselRef = useRef<HTMLDivElement>(null);

  const handlePrevClick = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: -300, behavior: 'smooth' });
    }
  };

  const handleNextClick = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: 300, behavior: 'smooth' });
    }
  };

  return (
    <div className='relative flex flex-col items-center justify-center  '>
      <button onClick={handlePrevClick} className="pre-btn hidden lg:block ml-12  absolute left-0 z-10 ">
        <ArrowLeftCircle size={32} />
      </button>
      <button onClick={handleNextClick} className="next-btn hidden lg:block mr-14 absolute right-0 z-10 ">
        <ArrowRightCircle size={32} />
      </button>

      <div ref={carouselRef} className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 overflow-x-scroll space-x-6'>
        {destinations.map((destination) => (
          <div key={destination.id} className='relative flex rounded-md items-center mt-10 text-white '>
            <Image src={destination.photo} alt={destination.name} width={300} height={400} className="object-cover cursor-pointer" />
            <div className='absolute bottom-0  left-0 w-72 bg-black bg-opacity-30 p-4 rounded-lg '>
              <div className='flex  text-center items-center'>
                
                <h1 className="text-[40px] lg:text-4xl font-normal font-['DM_Serif_Display'] leading-10 lg:leading-9">{destination.name}</h1>
              </div>
              <div className='text-white'>
              <div className="flex flex-row">
              <Image src={destination.icon} alt='icon' width={30} height={30} className="mr-2 cursor-pointer" />
              <p className=" text-lg lg:text-base font-bold font-['Roboto'] leading-[20px] lg:leading-[22px]">{destination.loc}</p>
              </div>
                <p className="text-lg lg:text-base font-['Roboto'] leading-18">{destination.price}</p>
              </div>
              <div className="activity-stars flex">
                {[...Array(4)].map((_, i) => (
                  <Image key={i} src={destination.stars.yellow} alt="yellow star" className="star-icon cursor-pointer" width={30} height={30} />
                ))}
                <Image src={destination.stars.white} alt="white star" className="star-icon cursor-pointer" width={30} height={30} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyCard;
