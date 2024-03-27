import Link from "next/link";
import React from "react";
import { FaBitcoin } from "react-icons/fa";
import { navOptions } from "@/data/NavOptions";
import NavOptions from "./NavOption";
import Footer from "../Footer";

const Sidenav = () => {
  return (
    <div className=" fixed left-0 w-[15%] bg-[#00224D] text-white h-screen pt-4">
      <div className=" flex flex-col justify-between">
        <Link href={"/"}>
          <div className=" flex justify-center items-center gap-x-2 text-[30px] font-bold">
            <FaBitcoin className="text-[33px] text-yellow-400" />
            CryptoVerse
          </div>
        </Link>

        <div className=" flex flex-col gap-y-5 px-[35px] py-14">
          {navOptions.map((navOption, i) => (
            <NavOptions key={i} navOption={navOption} />
          ))}
        </div>
        <div className=" fixed left-8 bottom-3">
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Sidenav;
