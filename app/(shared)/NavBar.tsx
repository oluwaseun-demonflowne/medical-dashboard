import React from "react";
import { CiCalendar } from "react-icons/ci";
import { GoClock } from "react-icons/go";
import { CiCreditCard2 } from "react-icons/ci";
import { FaRegEnvelope } from "react-icons/fa6";
import { FaRegFileAlt } from "react-icons/fa";
import { CiSettings } from "react-icons/ci";
import { FaUserDoctor } from "react-icons/fa6";

type Props = {};

const NavBar = (props: Props) => {
  return (
    <nav className="border w-52 px-2">
      <div></div>
      <ul className="flex flex-col">
        <li className="cursor-pointer flex gap-2 py-3 rounded-sm hover:text-white hover:bg-black px-5 items-center text-sm">Overview</li>
        <li className="cursor-pointer flex gap-2 py-3 rounded-sm hover:text-white hover:bg-black px-5 items-center text-sm"><CiCalendar />Appointment</li>
        <li className="cursor-pointer flex gap-2 py-3 rounded-sm hover:text-white hover:bg-black px-5 items-center text-sm"><FaUserDoctor />My Patients</li>
        <li className="cursor-pointer flex gap-2 py-3 rounded-sm hover:text-white hover:bg-black px-5 items-center text-sm"><GoClock />Shedule Timings</li>
        <li className="cursor-pointer flex gap-2 py-3 rounded-sm hover:text-white hover:bg-black px-5 items-center text-sm"><CiCreditCard2 />Payments</li>
        <li className="cursor-pointer flex gap-2 py-3 rounded-sm hover:text-white hover:bg-black px-5 items-center text-sm"><FaRegEnvelope />Message</li>
        <li className="cursor-pointer flex gap-2 py-3 rounded-sm hover:text-white hover:bg-black px-5 items-center text-sm"><FaRegFileAlt />Blog</li>
        <li className="cursor-pointer flex gap-2 py-3 rounded-sm hover:text-white hover:bg-black px-5 items-center text-sm"><CiSettings />Settings</li>
      </ul>
    </nav>
  );
};

export default NavBar;
