import List from "@/components/message/List";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {/* <Navbar /> */}
      <main className="flex w-[100%]   border">
        <List />
        {children}
      </main>
      {/* <Footer /> */}
    </>
  );
}
