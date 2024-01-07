import React from "react";
import { SlCalender } from "react-icons/sl";
import { MdOutlinePerson4 } from "react-icons/md";
import { IoBagAdd } from "react-icons/io5";
import { CiVideoOn } from "react-icons/ci";
import AppointmentRequest from "./snipperfolder/AppointmentRequest";

type Props = {};

const About = (props: Props) => {
  return (
    <div>
      <div className="w-full flex gap-4">
        <div className="rounded-md pl-3 flex py-3 gap-3 items-center w-[100%] bg-[#7a6efe] text-white">
          <p className="bg-[#9188ff] rounded-full p-2">
            <SlCalender className="text-base" />
          </p>
          <div className="flex flex-col ">
            <h1 className="font-bold text-sm">24.4k</h1>
            <p className="text-xs">Appointments</p>
          </div>
        </div>
        <div className="rounded-md pl-3 flex py-3 gap-3 items-center w-[100%] bg-[#ff5363] text-white">
          <p className="bg-[#ff717f] rounded-full p-2">
            <MdOutlinePerson4 className="text-base" />
          </p>
          <div className="flex flex-col ">
            <h1 className="font-bold text-sm">166.3k</h1>
            <p className="text-xs">Total Patient</p>
          </div>
        </div>
        <div className="rounded-md pl-3 flex py-3 gap-3 items-center w-[100%] bg-[#ffa901] text-white">
          <p className="bg-[#ffb72d] rounded-full p-2">
            <IoBagAdd className="text-base" />
          </p>
          <div className="flex flex-col ">
            <h1 className="font-bold text-sm">53.5k</h1>
            <p className="text-xs">Clinic Consulting</p>
          </div>
        </div>
        <div className="rounded-md pl-3 flex py-3 gap-3 items-center w-[100%] bg-[#24a8fa] text-white">
          <p className="bg-[#4bb8f9] rounded-full p-2">
            <CiVideoOn className="text-base" />
          </p>
          <div className="flex flex-col ">
            <h1 className="font-bold text-sm">28.0k</h1>
            <p className="text-xs">Video Consulting</p>
          </div>
        </div>
      </div>
      <div>
        <AppointmentRequest />
      </div>
    </div>
  );
};

export default About;
