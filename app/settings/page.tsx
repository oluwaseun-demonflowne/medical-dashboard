import Header from "@/components/Header";
import Head from "@/components/settings/Head";
import Profile from "@/components/settings/profile";

type Props = {};

const page = async (props: Props) => {
  return (
    <main className="w-[100%]  bg-[#f9f9f9] flex flex-col gap-4  px-4 ">
        <Header />
        <p className="text-xl font-medium tracking-tighter">My Profile</p>
        <div className="flex gap-4">
            <Profile />
            <Head />
        </div>
    </main>
  );
};

export default page;
