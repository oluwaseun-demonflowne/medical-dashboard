"use client";
import { signIn } from "next-auth/react";
import React from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { FcGoogle } from "react-icons/fc";
type Props = {};

const Page = (props: Props) => {
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get("callbackUrl") || "/";
  return (
    <main className="flex items-center">
      <FcGoogle className="text-2xl" />
      <button onClick={() => signIn("google", { callbackUrl })}>
        Log in with google
      </button>
    </main>
  );
};

export default Page;
