import { people } from "@/lib/AppointmentRequest";
import React from "react";
import { IoIosArrowForward } from "react-icons/io";
import { LiaTimesSolid } from "react-icons/lia";
import { IoMdCheckmark } from "react-icons/io";
import Image from "next/image";
import demo from "@/public/Profile photo.png"

type Props = {};

const AppointmentRequest = (props: Props) => {
  return (
    <div className="flex flex-col gap-3 w-[100%]">
      <div className="flex justify-between items-center">
        <h1 className="font-bold">Appointment Request</h1>
        <p className="text-[#85ccf1] text-sm flex items-center">
          View All <IoIosArrowForward />
        </p>
      </div>
      <div className="flex rounded-md flex-col gap-4 text-xs bg-white shadow-md p-4">
        {people.map((i) => (
          <div key={i.id} className="flex justify-between items-center">
            <div className="flex gap-2">
              <Image src={demo} alt="demo" width={100} height={100} placeholder="blur" className="w-11 rounded-full" />
              <div className="flex flex-col gap-1">
                <p className="text-sm font-medium">{i.name}</p>
                <p>
                  {i.age}, {i.date} {i.time} {i.ampm}
                </p>
              </div>
            </div>
            {i.status !== "not available" ? (
              <button
                className={` w-24 p-2 rounded-md font-medium ${
                  i.status === "declined"
                    ? "bg-[#feeeef] text-[#e95b71]"
                    : i.status === "confirmed"
                    ? "bg-[#e9f6fe] text-[#7a77e0]"
                    : ""
                }`}
              >
                {i.status}
              </button>
            ) : (
              <div className="flex gap-2 justify-center ">
                <button className="text-[#f15965] p-2 border rounded-md text-xs border-[#f15965]"><LiaTimesSolid /></button>
                <button className="text-[#7b71ee] p-2 text-xs rounded-md border border-[#7b71ee]"><IoIosArrowForward /></button>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default AppointmentRequest;
