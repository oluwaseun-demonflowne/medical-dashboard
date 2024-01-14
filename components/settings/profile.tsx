// "use client"
import React from "react";
import Image from "next/image";
import { shimmer, toBase64 } from "@/components/Shimmer";
import { auth } from "@/lib/auth";
import EditButton from "./EditButton";

type Props = {};

const Profile = async (props: Props) => {
  const session = await auth();
  const user = session?.user;
  return (
    <div className="flex py-7 h-min shadow-lg bg-white items-center min-w-64 w-64 flex-col gap-2">
      <Image
        className="w-20 h-20 rounded-full"
        placeholder={`data:image/svg+xml;base64,${toBase64(shimmer(700, 475))}`}
        quality={100}
        alt="picture"
        width={100}
        height={100}
        src={user?.image as string}
      />
      <p className="font-semibold text-base">Dr.{" "}{user?.name}</p>
      <p className="text-sm text-slate-400 font-bold">{user?.role}</p>
      <EditButton />
    </div>
  );
};

export default Profile;
