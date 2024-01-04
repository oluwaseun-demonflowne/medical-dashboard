"use client";
import { CiSearch } from "react-icons/ci";
import { IoHelpCircleOutline } from "react-icons/io5";
import { IoMdNotificationsOutline } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";

export default function Home() {
  return (
    <main className="border w-full">
      <div>
        <form className="flex items-center text-slate-400 gap-1">
          <CiSearch className="text-xl" />
          <input
            className="text-sm w-72 py-2 outline-none px-1"
            type="text"
            placeholder="Search Appointment, Patient or etc"
          />
        </form>
        <div></div>
      </div>
    </main>
  );
}
