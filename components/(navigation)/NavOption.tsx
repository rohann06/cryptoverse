"use client";

import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";

interface NavOptionsProps {
  navOption: {
    name: string;
    icon: any;
    href: string;
  };
  setOpenNav?: any;
}

const NavOptions = ({ navOption, setOpenNav }: NavOptionsProps) => {
  const pathname = usePathname();
  return (
    <Link href={navOption.href}>
      <div
        onClick={() => setOpenNav(false)}
        className={` ${
          pathname === navOption.href &&
          "lg:bg-[#173863] font-bold lg:font-semibold"
        } lg:hover:bg-[#173863] px-5 py-3 lg:rounded-[10px]`}
      >
        <div className=" flex items-center gap-x-2">
          <p className=" text-[22px]">{navOption.icon}</p>
          <p className=" text-[18px]">{navOption.name}</p>
        </div>
      </div>
    </Link>
  );
};

export default NavOptions;
