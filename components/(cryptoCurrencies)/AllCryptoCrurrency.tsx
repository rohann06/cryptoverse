"use client";
import React from "react";
import { useQuery } from "@tanstack/react-query";
import CoinCard from "./CoinCard";
import Loading from "../Loading";
import axios from "axios";

const AllCryptoCrurrency = ({
  limit,
  searchResult,
  queryKey,
}: {
  limit: string;
  searchResult?: string;
  queryKey: string;
}) => {
  const { data, isLoading, isError } = useQuery({
    queryKey: [{ queryKey }, searchResult],
    queryFn: async () => {
      if (queryKey === "allCoins") {
        const response = await axios.get(
          `https://coinranking1.p.rapidapi.com/coins?limit=${limit}&search=${searchResult}`,
          {
            headers: {
              "X-RapidAPI-Key": process.env.NEXT_PUBLIC_RAPID_APIKEY,
              "X-RapidAPI-Host": process.env.NEXT_PUBLIC_RAPID_APIHOST,
            },
          }
        );
        return response.data;
      } else {
        const response = await axios.get(
          `https://coinranking1.p.rapidapi.com/coins?limit=${limit}`,
          {
            headers: {
              "X-RapidAPI-Key": process.env.NEXT_PUBLIC_RAPID_APIKEY,
              "X-RapidAPI-Host": process.env.NEXT_PUBLIC_RAPID_APIHOST,
            },
          }
        );
        return response.data;
      }
    },
  });

  const allCurrencies = data?.data?.coins;
  console.log("all coins", allCurrencies);

  if (isError) {
    return <p>Opps something went wrong....🤯</p>;
  }

  return (
    <div>
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
                uuid={coin?.uuid}
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
