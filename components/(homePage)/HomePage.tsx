"use client";
import React from "react";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import CoinStats from "./(stats)/CoinStats";
import TopCoins from "./(topCoins)/TopCoins";

const HomePage = () => {
  
  const { data, isLoading, isError } = useQuery({
    queryKey: ["coinDetails"],
    queryFn: async () => {
      const response = await axios.get(
        "https://coinranking1.p.rapidapi.com/coins?limit=10",
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

  if (isError) {
    return <p>Opps something went wrong....🤯</p>;
  }

  //GATTING THE CRYPTO STATS AND COINS
  const globleState = data?.data?.stats;
  const cryptoCoins = data?.data?.coins;
  console.log("Data", cryptoCoins);

  return (
    <div>
      <CoinStats isLoading={isLoading} globleState={globleState} />
      <TopCoins isLoading={isLoading} cryptoCoins={cryptoCoins} />
    </div>
  );
};

export default HomePage;
