import AllNews from "@/components/(news)/AllNews";
import Headings from "@/components/Headings";
import Link from "next/link";
import React from "react";
import { FaLongArrowAltLeft } from "react-icons/fa";

const TopNews = () => {
  return (
    <div className=" my-[40px] lg:mt-[55px] ">
      <div className=" lg:flex items-center justify-between">
        <Headings title={"Top Crypto News In The World"} />
        <Link href={"/news"}>
          <p className=" lg:flex items-center gap-x-1 hover:text-[#3f7ed1] hidden text-[#173863] font-semibold text-[18px] underline">
            <FaLongArrowAltLeft />
            Show More
          </p>
        </Link>
      </div>
      <div>
        <AllNews batchSize={6} />
      </div>
    </div>
  );
};

export default TopNews;
