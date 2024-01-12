"use client";
// import { demoChats } from "@/lib/AppointmentRequest";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import demo from "@/public/Profile photo.png";
import { RiShareForwardLine } from "react-icons/ri";
import { IoEllipsisHorizontal } from "react-icons/io5";
import { BiCheckDouble } from "react-icons/bi";
import { useSession } from "next-auth/react";
import { Data, chatType } from "@/index";
import { useSocket } from "@/app/socket-provider";
import { shimmer, toBase64 } from "../Shimmer";
type Props = {};

const Chat = (props: Props) => {
  const { socket, isConnected } = useSocket();
  const { data: session, status } = useSession();
  const [getId, setGetId] = React.useState(0);
  const [chat, setChat] = useState<chatType[]>([]);
  const myRef = useRef<HTMLDivElement | null>(null);
  const handlePopup = (id: number) => {
    setGetId(id);
  };

  // console.log(chat)

  useEffect(() => {
    socket?.on("sentMessageFromServer", (data: Data) => {
      setChat((prev) => [...prev, data.data]);
    });
  }, [socket]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (myRef.current && !myRef.current.contains(event.target as Node)) {
        setGetId(0);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [myRef]);

  return (
    <div className="flex h-[100%] flex-col gap-3 px-4 my-4">
      {chat?.length > 0 ? (
        chat.map((i) => (
          <div
            className={`flex ${
              i.senderEmail === session?.user?.email ? "flex-row-reverse" : ""
            } gap-3 items-center`}
            key={i.chatId}
          >
            {i.senderEmail === session?.user?.email ? (
              <Image
                src={i.picture}
                alt="demo"
                width={100}
                placeholder={`data:image/svg+xml;base64,${toBase64(
                  shimmer(700, 475)
                )}`}
                height={100}
                className="w-8 h-8 rounded-full"
              />
            ) : (
              <Image
                src={i.picture}
                placeholder={`data:image/svg+xml;base64,${toBase64(
                  shimmer(700, 475)
                )}`}
                alt="demo"
                width={100}
                height={100}
                className="w-8 h-8 rounded-full"
              />
            )}
            <div
              className={`flex flex-col ${
                i.senderEmail === session?.user?.email ? "items-end" : ""
              } gap-1`}
            >
              <p
                className={`text-sm ${
                  i.senderEmail === session?.user?.email
                    ? "bg-[#24a8fa] text-white"
                    : ""
                } border rounded-t-lg rounded-r-lg py-[7px] px-4`}
              >
                {i.message}
              </p>
              <div className="flex gap-1">
                {i.senderEmail === session?.user?.email && (
                  <BiCheckDouble className="text-[#2aa6f7]" />
                )}
                <p className="text-xs text-slate-400">{i.date}</p>
              </div>
            </div>
            {i.senderEmail !== session?.user?.email && (
              <RiShareForwardLine className="text-2xl text-slate-400 cursor-pointer" />
            )}
            {i.senderEmail === session?.user?.email && (
              <div className="relative">
                <button onClick={(e) => handlePopup(i.chatId)}>
                  <IoEllipsisHorizontal className="text-2xl text-slate-400 cursor-pointer" />
                </button>
                {getId === i.chatId && (
                  <div
                    ref={myRef}
                    className="absolute bg-white top-6 flex z-50 shadow-lg  flex-col gap-1 py-3 rounded-md"
                  >
                    <button className="py-[6px] hover:bg-[#f4f4f4] text-sm text-slate-500 font-medium w-24">
                      Reply
                    </button>
                    <button className="py-[6px] hover:bg-[#f4f4f4] text-sm text-slate-500 font-medium w-24">
                      Forward
                    </button>
                    <button className="py-[6px] hover:bg-[#f4f4f4] text-sm text-slate-500 font-medium w-24">
                      Delete
                    </button>
                  </div>
                )}
              </div>
            )}
          </div>
        ))
      ) : (
        <div className="flex justify-center items-center h-[100%]">
          <p className="text-base">No message sent between two of you</p>
        </div>
      )}
    </div>
  );
};

export default Chat;
