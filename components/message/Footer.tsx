"use client";
import React from "react";
import { FiSend } from "react-icons/fi";
import { VscSmiley } from "react-icons/vsc";
import { MdOutlineKeyboardVoice } from "react-icons/md";
import { GoPaperclip } from "react-icons/go";
import { useSocket } from "@/app/socket-provider";
import { useSession } from "next-auth/react";
type Props = {};

const Footer = (props: Props) => {
  const { socket, isConnected } = useSocket();
  const { data: session, status } = useSession();
  const [text, setText] = React.useState("");
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await socket?.emit("sentMessage", {
      chatId: Math.floor(Math.random() * 100),
      message: text,
      senderEmail: session?.user?.email,
      receiverEmail:
        session?.user?.email === "ibuemmanuel60@gmail.com"
          ? "khanroberts3@gmail.com"
          : "ibuemmanuel60@gmail.com",
      date: "Today 7:45 am",
      picture: session?.user?.image,
    });
    setText("")
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="px-4 mb-4 text-slate-500 flex justify-between gap-2 items-center"
    >
      <div className="flex gap-2 px-4 rounded-md border w-[100%] items-center ">
        <VscSmiley className="text-xl" />
        <input
          value={text}
          onChange={(e) => setText(e.currentTarget.value)}
          type="text"
          className="py-3 text-black px-4 outline-none w-[100%]"
          placeholder="Type a message..."
        />
        <button>
          <GoPaperclip className="text-xl" />
        </button>
        <button>
          <MdOutlineKeyboardVoice className="text-xl" />
        </button>
      </div>
      <button
        className={`text-white ${
          text.length < 1 ? "pointer-events-none opacity-30" : ""
        } bg-[#7a6efd] rounded-full flex items-center justify-center w-8 h-8`}
      >
        <FiSend />
      </button>
    </form>
  );
};

export default Footer;
