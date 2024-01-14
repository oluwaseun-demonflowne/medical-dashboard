"use client"
import React from 'react'
import { CiEdit } from "react-icons/ci";
import { FaStar } from "react-icons/fa";
import { Progress } from '../ui/progress';

type Props = {}

const EditButton = (props: Props) => {
  return (
    <div className=' flex flex-col items-center text-center gap-3'>
        <button className='bg-[#7c71fe] py-2 px-3 flex text-white text-sm items-center gap-2 rounded-sm'><CiEdit />Edit Profile</button>
        <div className='flex flex-col gap-3'>
            <p>146 rates</p>
            <div className='flex gap-3'>
                <FaStar  className="text-[#ffa700] text-xl"/>
                <FaStar  className="text-[#ffa700] text-xl"/>
                <FaStar  className="text-[#ffa700] text-xl"/>
                <FaStar  className="text-[#ffa700] text-xl"/>
                <FaStar  className="text-[#ffa700] text-xl"/>
            </div>
            <div className='text-sm font-medium flex justify-between items-center text-slate-600'>
                <p>Trust</p>
                <p>90%</p>
            </div>
            <Progress value={90} />
        </div>
    </div>
  )
}

export default EditButton