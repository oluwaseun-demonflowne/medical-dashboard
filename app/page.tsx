import { CiSearch } from "react-icons/ci";
import { IoHelpCircleOutline } from "react-icons/io5";
import { IoMdNotificationsOutline } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";
import Image from "next/image";
import { shimmer, toBase64 } from "@/components/Shimmer";
import About from "@/components/overview/About";
import { auth } from "@/lib/auth";
import Header from "@/components/Header";

export default async function Home() {
  const session = await auth()
  const user = session?.user;
  

  return (
    <main className="w-[100%] bg-[#f9f9f9]  px-4 ">
      <Header />
      <About />
    </main>
  );
}
