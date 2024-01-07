import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import "./globals.css";
import NavBar from "./(shared)/NavBar";
import Providers from "./Provider";
import { Session } from "next-auth";

const inter = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Medical App",
  description: "An app for medical personells",
};

export default function RootLayout({
  children,
  session,
}: {
  children: React.ReactNode;
  session: Session;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} flex`}>
        <Providers session={session}>
          <NavBar />
          {children}
        </Providers>
      </body>
    </html>
  );
}
