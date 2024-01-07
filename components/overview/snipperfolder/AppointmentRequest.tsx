import React from 'react'
import { IoIosArrowForward } from "react-icons/io";

type Props = {}

const AppointmentRequest = (props: Props) => {
  return (
    <div>
        <div className='flex justify-between'>
            <h1 className='font-bold'>Appointment Request</h1>
            <p className='text-[#85ccf1] flex items-center'>View All <IoIosArrowForward /></p>
        </div>
        <div>

        </div>
    </div>
  )
}

export default AppointmentRequest