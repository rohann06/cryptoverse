import Loading from "@/components/Loading";
import Image from "next/image";
import React from "react";
import millify from "millify";
import Link from "next/link";

interface CoinCardProps {
  uuid: string;
  rank?: number;
  coinName: string;
  icon: string;
  isLoading: boolean;
  coinPrice: number;
  marketCap: number;
  dailyChnage: string;
}

const CoinCard = ({
  uuid,
  rank,
  coinName,
  icon,
  coinPrice,
  marketCap,
  dailyChnage,
}: CoinCardProps) => {
  return (
    <Link href={`/coinDetails/${uuid}`}>
      <div className=" hover:shadow-md border border-gray-200 bg-white rounded-[10px] p-4 md:p-6">
        <div>
          <div className=" flex items-center justify-between mb-1 md:mb-2">
            <div className=" flex items-center gap-x-1 font-semibold">
              <p>{rank}.</p>
              <p>{coinName}</p>
            </div>
            <div>
              <Image
                src={icon}
                alt="icon"
                height={500}
                width={500}
                className=" h-auto w-[33px]"
              />
            </div>
          </div>
          <hr />
          <div className=" flex flex-col gap-y-2 py-4">
            <div className=" flex items-center gap-x-2">
              <p>Price:</p>
              <p className=" font-semibold">{millify(coinPrice)} $</p>
            </div>
            <div className=" flex items-center gap-x-2">
              <p>MarketCap:</p>
              <p className=" font-semibold">{millify(marketCap)}</p>
            </div>
            <div className=" flex items-center gap-x-2">
              <p>Daly Change:</p>
              <p
                className={`${
                  dailyChnage < "0" ? "text-red-500" : "text-green-500"
                } font-semibold`}
              >
                {dailyChnage}%
              </p>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default CoinCard;
