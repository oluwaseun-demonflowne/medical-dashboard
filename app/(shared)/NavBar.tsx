import React from "react";
import { CiCalendar } from "react-icons/ci";
import { GoClock } from "react-icons/go";
import { CiCreditCard2 } from "react-icons/ci";
import { FaRegEnvelope } from "react-icons/fa6";
import { FaRegFileAlt } from "react-icons/fa";
import { CiSettings } from "react-icons/ci";
import { FaUserDoctor } from "react-icons/fa6";
import { CiGrid41 } from "react-icons/ci";
import Image from "next/image";
import Logo from "../../public/medical logo.png";

type Props = {};

const NavBar = (props: Props) => {
  return (
    <nav className="bg-white flex flex-col gap-4  w-56 px-2">
      <div className="mt-8 flex items-center">
        <Image
          alt="logo"
          width={100}
          height={100}
          placeholder="blur"
          src={Logo}
          className="w-12"
        />
        <h1 className="text-sm font-black">Doct.</h1>
      </div>
      <ul className="flex flex-col">
        <li className="cursor-pointer flex gap-2 py-3 rounded-sm hover:text-white hover:bg-black px-5 items-center text-sm">
          <CiGrid41 className="text-base"/>  
          Overview
        </li>
        <li className="cursor-pointer flex gap-2 py-3 rounded-sm hover:text-white hover:bg-black px-5 items-center text-sm">
          <CiCalendar className="text-base" />
          Appointment
        </li>
        <li className="cursor-pointer flex gap-2 py-3 rounded-sm hover:text-white hover:bg-black px-5 items-center text-sm">
          <FaUserDoctor className="text-base" />
          My Patients
        </li>
        <li className="cursor-pointer flex gap-2 py-3 rounded-sm hover:text-white hover:bg-black px-5 items-center text-sm">
          <GoClock className="text-base" />
          Shedule Timings
        </li>
        <li className="cursor-pointer flex gap-2 py-3 rounded-sm hover:text-white hover:bg-black px-5 items-center text-sm">
          <CiCreditCard2 className="text-base" />
          Payments
        </li>
        <li className="cursor-pointer flex gap-2 py-3 rounded-sm hover:text-white hover:bg-black px-5 items-center text-sm">
          <FaRegEnvelope className="text-base" />
          Message
        </li>
        <li className="cursor-pointer flex gap-2 py-3 rounded-sm hover:text-white hover:bg-black px-5 items-center text-sm">
          <FaRegFileAlt className="text-base" />
          Blog
        </li>
        <li className="cursor-pointer flex gap-2 py-3 rounded-sm hover:text-white hover:bg-black px-5 items-center text-sm">
          <CiSettings className="text-base" />
          Settings
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
