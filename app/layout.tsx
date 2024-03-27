import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Sidenav from "@/components/(navigation)/Sidenav";
import TanstackQueryProvider from "@/providers/TanstackQueryProvider";
import MobileNav from "@/components/(navigation)/MobileNav";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Cryptoverse",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <TanstackQueryProvider>
          <div className="  flex flex-col lg:flex-row gap-x-3 ">
            <div className=" hidden lg:block">
              <Sidenav />
            </div>
            <div className=" lg:hidden block">
              <MobileNav />
            </div>
            <div className=" lg:pl-[15.5%] pt-20 lg:pt-6">{children}</div>
          </div>
        </TanstackQueryProvider>
      </body>
    </html>
  );
}
