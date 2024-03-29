import Headings from "@/components/Headings";
import Link from "next/link";
import React from "react";
import { FaLongArrowAltLeft } from "react-icons/fa";
import AllCryptoCrurrency from "@/components/(cryptoCurrencies)/AllCryptoCrurrency";

const TopCoins = () => {
  return (
    <div className=" my-[40px] lg:mt-[55px] ">
      <div className=" lg:flex items-center justify-between">
        <Headings title={"Top 10 Crypto Coins In The World"} />
        <Link href={"/cryptocurrencies"}>
          <p className=" lg:flex items-center gap-x-1 hover:text-[#3f7ed1] hidden text-[#173863] font-semibold text-[18px] underline">
            <FaLongArrowAltLeft />
            Show More
          </p>
        </Link>
      </div>

      <AllCryptoCrurrency queryKey="topCoins" limit={"10"} />
    </div>
  );
};

export default TopCoins;
