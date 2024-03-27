import Headings from "@/components/Headings";
import Link from "next/link";
import React from "react";
import { FaLongArrowAltLeft } from "react-icons/fa";
import CoinCard from "./CoinCard";
import Loading from "@/components/Loading";

interface TopCoinsProps {
  isLoading: boolean;
  cryptoCoins: any;
}

const TopCoins = ({ isLoading, cryptoCoins }: TopCoinsProps) => {
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

      {isLoading ? (
        <Loading className={" text-[20px] lg:text-[36px] mt-[30px] lg:mt-[60px]"}/>
      ) : (
        <div className=" grid md:grid-cols-5 grid-col-1 gap-[30px] mt-8">
          {cryptoCoins?.map((cryptoCoin: any, i: React.Key) => (
            <CoinCard
              key={i}
              isLoading={isLoading}
              rank={cryptoCoin?.rank}
              coinName={cryptoCoin?.name}
              icon={cryptoCoin?.iconUrl}
              coinPrice={cryptoCoin?.price}
              marketCap={cryptoCoin?.marketCap}
              dailyChnage={cryptoCoin?.change}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default TopCoins;
