"use client";
import React from "react";
import { FaStar } from "react-icons/fa6";
import Image from "next/image";
import { shimmer, toBase64 } from "@/components/Shimmer";
import { useSession } from "next-auth/react";
type Props = {};

const Review = (props: Props) => {
  const { data: session, status } = useSession();
  return (
    <div className="w-full">
      <p  className="mb-4">Reviews</p>
      <div className=" max-w-[700px] py-6 px-8  bg-white rounded-md">
        <div className="flex flex-col gap-6">
          <div className="flex   justify-between items-center">
            <div className="flex gap-2 items-center">
              <Image
                className="w-8 h-8 rounded-full"
                placeholder={`data:image/svg+xml;base64,${toBase64(
                  shimmer(700, 475),
                )}`}
                quality={100}
                alt="picture"
                width={100}
                height={100}
                src={session?.user?.image as string}
              />
              <div className="flex  gap-1 flex-col">
                <p className="text-sm font-medium">{session?.user?.name}</p>
                <p className="text-xs">{session?.user?.role}</p>
              </div>
            </div>
            <div className="flex flex-col gap-1">
              <div className="flex gap-1">
                <FaStar className="text-xl text-yellow-500" />
                <FaStar className="text-xl text-yellow-500" />
                <FaStar className="text-xl text-yellow-500" />
                <FaStar className="text-xl text-yellow-500" />
                <FaStar className="text-xl text-yellow-500" />
              </div>
              <p className="text-xs">8 Jun, 2024</p>
            </div>
          </div>
          <p className="text-sm">
            I would wholeheartedly recommend Dr. Smith to anyone seeking a
            healthcare professional who combines expertise with genuine
            compassion. My experience left me reassured and confident in the
            care I received, and I am grateful to have such a dedicated and
            skilled doctor overseeing my health.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Review;
