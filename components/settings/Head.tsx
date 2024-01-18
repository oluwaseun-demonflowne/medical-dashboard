"use client";
import React from "react";
import { ChangePassword } from "./ChangePassword";
import { Notif } from "./Notif";
import { MyProfile } from "./MyProfile";
import Review from "./Review";

type Props = {};

const Head = (props: Props) => {
  const [page,currentPage] = React.useState("profile")
  const handlePage = (value:string) => {
    currentPage(value)
  }
  return (
    <div className="flex flex-col items-start mb-10 gap-6 w-full">
      <div className="flex bg-white font-medium h-10 gap-6 px-5 text-slate-600 rounded-sm text-sm">
        <button onClick={(e) => handlePage(e.currentTarget.value)} value="profile" className="hover:text-[#2ca6e9] hover:border-b-2 border-[#2ca6e9]">
          My Profile
        </button>
        <button onClick={(e) => handlePage(e.currentTarget.value)} value="password" className="hover:text-[#2ca6e9] hover:border-b-2 border-[#2ca6e9]">
          Change Password
        </button>
        <button onClick={(e) => handlePage(e.currentTarget.value)} value="noti" className="hover:text-[#2ca6e9] hover:border-b-2 border-[#2ca6e9]">
          Notification
        </button>
        <button onClick={(e) => handlePage(e.currentTarget.value)} value="review" className="hover:text-[#2ca6e9] hover:border-b-2 border-[#2ca6e9]">
          Reviews
        </button>
      </div>
      {/* <ChangePassword /> */}
      {
        page === "profile" ? <MyProfile />
        : page === "password" ? <ChangePassword />
        : page === "noti" ? <Notif />
        : <Review />
      }
    </div>
  );
};

export default Head;
