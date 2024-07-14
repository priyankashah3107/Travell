import { Input } from "@/components/ui/input"

import React from 'react'
import { DatePickerDemo } from "./DatePickerDemo"
import { Button } from "./ui/button"

const InputDemo = () => {
  return (
    <div className="text-white bg-black opacity-9  ">
       <div className="  bg-[#015950] h-screen lg:h-72 lg:bg-transparent w-screen lg:pt-20 ">

       
      <h1 className="text-[28px] lg:text-[40px] font-bold font-['Playfair_Display'] leading-[60px] text-center ">Plan your travel now</h1>

        <div className="  lg:h-full text-black flex flex-col lg:flex-row gap-6 p-10 lg:pt-0  justify-center items-center lg:text-center">
        <label className="text-white">
        Search Destination*
        <Input type="text" placeholder="Enter Destination" className="w-72 md:w-96 lg:w-full"  />
        </label>

        <label className="text-white">
        Pax Number*
        <Input type="number" placeholder="No.of People" className="w-72 md:w-96 lg:w-full" />
        </label>

        <label className="w-72 md:w-96 lg:w-auto flex flex-col text-white">
        Checkin Date*
        <DatePickerDemo  />
        </label>

        <label className="w-72 md:w-96 lg:w-auto flex flex-col text-white">
        Checkout Date*
        <DatePickerDemo />
        </label>

        <Button className="w-72 md:w-96 lg:w-[200px] h-[42px] bg-[#17C3B2] hover:bg-[#17C3B2]  rounded-full lg:mt-6">SEARCH</Button>
        </div>
        </div>
    </div>
  )
}

export default InputDemo
