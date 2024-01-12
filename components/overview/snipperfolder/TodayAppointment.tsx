"use client"
import { doctorAppointments } from "@/lib/AppointmentRequest";
import React from "react";
import demo from "@/public/Profile photo.png";
import Image from "next/image";
import { Calendar } from "@/components/ui/calendar"

type Props = {};

const TodayAppointment = (props: Props) => {
  const [date, setDate] = React.useState<Date | undefined>(new Date())
 
  return (
    <div className="flex flex-col gap-3 w-[100%]">
      <div className="flex justify-between items-center">
        <h1 className="font-bold">Today Appointments</h1>
      </div>
      <div className="flex rounded-md flex-col gap-4 text-xs bg-white shadow-md p-4">
        {doctorAppointments.map((i) => (
          <div className="flex justify-between items-center" key={i.name}>
            <div className="flex gap-2 items-center">
              <Image
                src={demo}
                alt="demo"
                width={100}
                height={100}
                placeholder="blur"
                className="w-11 rounded-full"
              />
              <div>
                <p className="text-sm font-medium">{i.name}</p>
                <p>{i.reason}</p>
              </div>
            </div>
            <p>{i.time}</p>
          </div>
        ))}
      </div>
      <Calendar
        mode="single"
        selected={date}
        onSelect={setDate}
        className="rounded-md border w-[100%] h-[50px]"
      />
    </div>
  );
};

export default TodayAppointment;
