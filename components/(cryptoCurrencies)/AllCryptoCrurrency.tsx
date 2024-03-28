"use client";
import React from "react";
import { useQuery } from "@tanstack/react-query";
import CoinCard from "../(homePage)/(topCoins)/CoinCard";
import Loading from "../Loading";
import axios from "axios";
import Headings from "../Headings";
import { FaSearch } from "react-icons/fa";

const AllCryptoCrurrency = () => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["allCoins"],
    queryFn: async () => {
      const response = await axios.get(
        "https://coinranking1.p.rapidapi.com/coins?limit=200",
        {
          headers: {
            "X-RapidAPI-Key": process.env.NEXT_PUBLIC_RAPID_APIKEY,
            "X-RapidAPI-Host": process.env.NEXT_PUBLIC_RAPID_APIHOST,
          },
        }
      );
      return response.data;
    },
  });

  const allCurrencies = data?.data?.coins;
  console.log("all coins", allCurrencies);

  if (isError) {
    return <p>Opps something went wrong....🤯</p>;
  }

  return (
    <div>
      <div className=" md:flex items-center gap-x-10">
        <Headings title="Crypto Currencies" />

        <div className=" border flex items-center bg-white rounded-full overflow-hidden lg:w-[500px]">
          <input placeholder="write coin name eg.Biycoin..." type="text" className="outline-none px-5 py-3 w-full"/>
          <button className=" bg-[#00224D] rounded-full text-white p-3">
            <FaSearch />
          </button>
        </div>
      </div>
      <div className=" mt-[20px] lg:mt-[30px] mb-10">
        {isLoading ? (
          <Loading
            className={" text-[20px] lg:text-[36px] mt-[30px] lg:mt-[60px]"}
          />
        ) : (
          <div className=" grid md:grid-cols-5 grid-col-2 gap-[30px] mt-8">
            {allCurrencies?.map((coin: any, i: number) => (
              <CoinCard
                key={i}
                isLoading={isLoading}
                rank={coin?.rank}
                coinName={coin?.name}
                icon={coin?.iconUrl}
                coinPrice={coin?.price}
                marketCap={coin?.marketCap}
                dailyChnage={coin?.change}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default AllCryptoCrurrency;
