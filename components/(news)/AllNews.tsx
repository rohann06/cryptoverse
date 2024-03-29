"use client";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React from "react";
import NeewsCard from "./NeewsCard";
import Loading from "../Loading";

const AllNews = ({ batchSize }: { batchSize: number }) => {
  const date = new Date();
  const { data, isLoading, isError } = useQuery({
    queryKey: ["allnewa"],
    queryFn: async () => {
      const response = await axios.get(
        `https://newsapi.org/v2/everything?q=cryptomarket&sortBy=popularity&to=${date}&pageSize=${batchSize}&apiKey=${process.env.NEXT_PUBLIC_NEWS_API_KEY}`
      );
      return response.data;
    },
  });

  //Gatting newses
  const Newses = data?.articles;
  console.log("News", Newses);

  return (
    <div className=" mt-8">
      {isLoading ? (
        <Loading
          className={" text-[20px] lg:text-[36px] mt-[30px] lg:mt-[60px]"}
        />
      ) : (
        <div className=" grid justify-center md:grid-cols-3 grid-col-1 lg:gap-[30px] gap-y-10">
          {Newses?.map((news: any, i: number) => (
            <NeewsCard key={i} news={news} />
          ))}
        </div>
      )}
    </div>
  );
};

export default AllNews;
