"use client";
import React from "react";
import { ChangePassword } from "./ChangePassword";
import { Notif } from "./Notif";

type Props = {};

const Head = (props: Props) => {
  return (
    <div className="flex flex-col items-start gap-6 w-full">
      <div className="flex bg-white font-medium h-10 gap-6 px-5 text-slate-600 rounded-sm text-sm">
        <button className="hover:text-[#2ca6e9] hover:border-b-2 border-[#2ca6e9]">
          My Profile
        </button>
        <button className="hover:text-[#2ca6e9] hover:border-b-2 border-[#2ca6e9]">
          Change Password
        </button>
        <button className="hover:text-[#2ca6e9] hover:border-b-2 border-[#2ca6e9]">
          Notification
        </button>
        <button className="hover:text-[#2ca6e9] hover:border-b-2 border-[#2ca6e9]">
          Reviews
        </button>
      </div>
      {/* <ChangePassword /> */}
      <Notif />
    </div>
  );
};

export default Head;
