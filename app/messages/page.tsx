import Current from "@/components/message/Current";
import List from "@/components/message/List";
import React from "react";

const Page = async () => {
  return (
    <main className=" flex w-full bg-[#f9f9f9]">
      <List />
      <Current />
    </main>
  );
};

export default Page;
