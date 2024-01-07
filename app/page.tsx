import { CiSearch } from "react-icons/ci";
import { IoHelpCircleOutline } from "react-icons/io5";
import { IoMdNotificationsOutline } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";
import Image from "next/image";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { shimmer, toBase64 } from "@/components/Shimmer";
import About from "@/components/overview/About";

export default async function Home() {
  const session = await getServerSession(authOptions);
  const user = session?.user;

  return (
    <main className="w-[100%] bg-[#f9f9f9] pt-4 px-4 ">
      <div className="flex justify-between mb-5">
        <form className="flex items-center text-slate-400 gap-1">
          <CiSearch className="text-xl" />
          <input
            className="text-sm bg-[#f9f9f9] w-72 py-2 outline-none px-1"
            type="text"
            placeholder="Search Appointment, Patient or etc"
          />
        </form>
        <div className="flex items-center gap-6">
          <IoHelpCircleOutline className="text-2xl" />
          <IoMdNotificationsOutline className="text-2xl" />
          <Image
            className="w-9 h-9 rounded-full"
            placeholder={`data:image/svg+xml;base64,${toBase64(
              shimmer(700, 475)
            )}`}
            quality={100}
            alt="picture"
            width={100}
            height={100}
            src={user?.image as string}
          />
          <div>
            <h1 className="text-xs font-bold">{user?.name}</h1>
            <p className="text-xs">Cardiologist</p>
          </div>
          <IoIosArrowDown className="text-2xl" />
        </div>
      </div>
      <About />
    </main>
  );
}
