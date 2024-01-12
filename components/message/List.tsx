import { appointments } from "@/lib/AppointmentRequest";
import React from "react";
import Image from "next/image";
import demo from "@/public/Profile photo.png";

type Props = {};

const List = (props: Props) => {
  return (
    <div className="pt-4 min-w-72 bg-[#f9f9f9]">
      <div className="px-4 flex flex-col gap-5">
        <p className="font-bold text-sm">Message</p>
        <input
          type="text"
          placeholder="Search for message"
          className="border px-2 py-2 text-xs rounded-md outline-none"
        />
      </div>
      <div className="flex mt-5 flex-col gap-5 ">
        {appointments.map((i) => (
          <div
            className="hover:bg-[#f0f4ff] px-4 py-1 cursor-pointer"
            key={i.name}
          >
            <div>
              <div className="flex gap-2">
                <Image
                  src={demo}
                  alt="demo"
                  width={100}
                  height={100}
                  placeholder="blur"
                  className="w-8 h-8 rounded-full"
                />
                <div className="flex flex-col ">
                  <p className="text-xs font-semibold">{i.name}</p>
                  <p className="text-xs">{i.randomMessage}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default List;
