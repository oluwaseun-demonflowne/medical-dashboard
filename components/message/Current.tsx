import React from "react";
import Image from "next/image";
import demo from "@/public/Profile photo.png";
import { CiHeart } from "react-icons/ci";
import { IoAlertCircleOutline } from "react-icons/io5";
import Chat from "./Chat";
import Footer from "./Footer";

type Props = {};

const Current = (props: Props) => {
  return (
    <div className="pt-4 flex flex-col  bg-white border w-[100%]">
      <div className="flex px-4 border-b  pb-2 justify-between items-center">
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
            <p className="text-sm font-medium">Jone Martin</p>
            <p className="text-xs text-[#38a2e0]">Online</p>
          </div>
        </div>
        <div className="font-bold text-xl flex gap-4">
          <CiHeart />
          <IoAlertCircleOutline />
        </div>
      </div>
      <Chat />
      <Footer />
    </div>
  );
};

export default Current;
