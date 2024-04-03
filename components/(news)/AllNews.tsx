"use client";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React from "react";
import NeewsCard from "./NeewsCard";
import Loading from "../Loading";

const AllNews = ({ batchSize, key }: { batchSize: number; key: string }) => {
  const { data, isLoading, isError } = useQuery({
    queryKey: [{ key }],
    queryFn: async () => {
      const response = await axios.get(
        `https://news67.p.rapidapi.com/v2/crypto?languages=en&sortOrder=latest&batchSize=${batchSize}`,
        {
          headers: {
            "X-RapidAPI-Key": process.env.NEXT_PUBLIC_RAPID_APIKEY,
            "X-RapidAPI-Host": process.env.NEXT_PUBLIC_RAPID_NEWS_APIHOST,
          },
        }
      );
      return response.data;
    },
  });

  if (isError) {
    <p>Opps!Somthing went wrong...😐</p>;
  }

  //Gatting newses
  const Newses = data?.news;
  console.log("News", data?.news);

  return (
    <div className=" mt-8">
      {isLoading ? (
        <Loading
          className={" text-[20px] lg:text-[36px] mt-[30px] lg:mt-[60px]"}
        />
      ) : (
        <div className=" grid justify-center md:grid-cols-3 grid-col-1 lg:gap-[30px] gap-y-20">
          {Newses?.map((news: any, i: number) => (
            <NeewsCard key={i} news={news} />
          ))}
        </div>
      )}
    </div>
  );
};

export default AllNews;
