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
    <main className="flex justify-center w-full items-center flex-col">
      <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900 dark:text-gray-100">
        Sign in to your account
      </h2>
      <form className=" w-96 flex flex-col gap-8  mt-8 mb-4">
        <div className="rounded-md shadow-sm -space-y-px">
          <div>
            <label className="sr-only" htmlFor="email-address">
              Email address
            </label>
            <input
              autoComplete="email"
              className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
              id="email-address"
              name="email"
              placeholder="Email address"
              required
              type="email"
            />
          </div>
          <div>
            <label className="sr-only" htmlFor="password">
              Password
            </label>
            <input
              autoComplete="current-password"
              className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
              id="password"
              name="password"
              placeholder="Password"
              required
              type="password"
            />
          </div>
        </div>
        <button className="w-full bg-[#4f46e5] flex items-center gap-2 justify-center text-base py-2 rounded-sm text-white">
          Sign in
        </button>
      </form>
      <button
        className="w-96  bg-black flex items-center gap-2 justify-center text-base py-2 rounded-sm text-white"
        onClick={() => signIn("google", { callbackUrl })}
      >
        <FcGoogle className="text-2xl" /> Sign in with google
      </button>
      <p className="text-sm w-96 text-center mt-3">
        By signing in, you agree to our{" "}
        <u className="text-underline">Terms of Service</u> and{" "}
        <u className="text-underline">Privacy Policy</u> .
      </p>
    </main>
  );
};

export default Page;
