"use client";
import Link from "next/link";
import React, { useState } from "react";
import { FaBitcoin } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";

//Data
import { navOptions } from "@/data/NavOptions";
import NavOptions from "./NavOption";

const MobileNav = () => {
  const [openNav, setOpenNav] = useState(false);
  return (
    <div>
      <div className=" fixed top-0 w-full bg-[#00224D] text-white py-5 px-3">
        <div className=" flex justify-between items-center">
          <Link href={"/"}>
            <div className=" flex items-center gap-x-1 text-[20px] font-bold">
              <FaBitcoin className=" text-[24px]  text-yellow-400" />
              CryptoVerse
            </div>
          </Link>
          <div className=" text-[33px]">
            <GiHamburgerMenu onClick={() => setOpenNav(!openNav)} />
          </div>
        </div>
      </div>

      {openNav && (
        <div className=" bg-white absolute w-full mt-16 shadow-lg">
          {navOptions.map((navOption, i) => (
            <NavOptions key={i} navOption={navOption} />
          ))}
        </div>
      )}
    </div>
  );
};

export default MobileNav;
