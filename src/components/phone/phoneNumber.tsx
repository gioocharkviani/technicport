import React from 'react'
import { FaPhoneVolume } from "react-icons/fa6";

const PhoneNumber = () => {
  return (
    <div className='w-max flex items-center gap-3'>
        <FaPhoneVolume  className='text-color1'/>
        <span className='w-max text-[18px]'>+995 593 69 66 33</span>
    </div>
  )
}

export default PhoneNumber