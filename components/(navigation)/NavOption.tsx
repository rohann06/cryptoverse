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
}

const NavOptions = ({ navOption }: NavOptionsProps) => {
  const pathname = usePathname();
  return (
    <Link href={navOption.href}>
      <div
        className={` ${
          pathname === navOption.href && "bg-[#173863]"
        } hover:bg-[#173863]  px-5 py-3 rounded-[10px]`}
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
