"use client";
import React from "react";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import CoinStats from "./(stats)/CoinStats";

const HomePage = () => {
  // Access the client
  const queryClient = useQueryClient();

  const { data, isLoading, isError } = useQuery({
    queryKey: ["coinDetails"],
    queryFn: async () => {
      const response = await axios.get(
        "https://coinranking1.p.rapidapi.com/coins",
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

  if(isError){
    return(
      <p>Opps something went wrong....🤯</p>
    )
  }

  //GATTING THE CRYPTO STATS
  const globleState = data?.data?.stats;
  console.log("Data", data?.data);

  return (
    <div>
      <CoinStats isLoading={isLoading} globleState={globleState}/>
    </div>
  );
};

export default HomePage;
