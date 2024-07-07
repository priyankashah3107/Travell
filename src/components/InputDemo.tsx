import { Input } from "@/components/ui/input"

import React from 'react'
import { DatePickerDemo } from "./DatePickerDemo"
import { Button } from "./ui/button"

const InputDemo = () => {
  return (
    <div className="absolute left-0 lg:bottom-4 lg:left-24  text-white gap-4  items-center justify-center ">
       <div className="w-screen  bg-[#015950] lg:bg-transparent">

       
      <h1 className="text-[28px] lg:text-[40px] font-bold font-['Playfair_Display'] leading-[60px] text-center">Plan your travel now</h1>
        <div className="  lg:h-full flex flex-col lg:flex-row gap-6">
        <label>
        Search Destination*
        <Input type="text" placeholder="Enter Destination" />
        </label>

        <label>
        Pax Number*
        <Input type="number" placeholder="No.of People"  />
        </label>

        <label className="flex flex-col">
        Checkin Date*
        <DatePickerDemo  />
        </label>

        <label className="flex flex-col">
        Checkout Date*
        <DatePickerDemo />
        </label>

        <Button className=" lg:w-[200px] h-[42px] bg-[#17C3B2] hover:bg-[#17C3B2]  rounded-full lg:mt-4">SEARCH</Button>
        </div>
        </div>
    </div>
  )
}

export default InputDemo
