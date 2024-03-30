"use client";
import React from "react";
import Headings from "../Headings";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Image from "next/image";
import CoinDetailHeading from "./CoinDetailHeading";
import CoinDescriptionStates from "./CoinDescriptionStates";
import Loading from "../Loading";

const CoinDetail = ({ uuid }: { uuid: string }) => {
  const { data, isLoading } = useQuery({
    queryKey: ["coinDetail"],
    queryFn: async () => {
      const response = await axios.get(
        `https://coinranking1.p.rapidapi.com/coin/${uuid}`,
        {
          headers: {
            "X-RapidAPI-Key": process.env.NEXT_PUBLIC_RAPID_APIKEY,
            "X-RapidAPI-Host": process.env.NEXT_PUBLIC_RAPID_APIHOST,
          },
        }
      );
      return response?.data?.data;
    },
  });

  const coin = data?.coin;
  return (
    <>
      {isLoading ? (
        <Loading
          className={" text-[20px] lg:text-[36px] mt-[30px] lg:mt-[60px]"}
        />
      ) : (
        <div>
          <div className=" flex items-center gap-x-2 text-center md:text-left">
            <div>
              <Image
                src={coin?.iconUrl}
                alt="icon"
                height={500}
                width={500}
                className=" h-auto w-[30px] lg:w-[40px]"
              />
            </div>
            <Headings title={`${coin?.name} Details`} />
            <p className="text-[22px] lg:text-[30px] font-bold">
              ({coin?.symbol})
            </p>
          </div>

          <div className="  mt-[20px] lg:mt-[30px]">
            <CoinDetailHeading
              title={`What is ${coin?.name}?`}
              description={coin?.description}
            />


            {/* Price Grapg */}

            {/* States */}
            <div className=" mt-8">
              <CoinDescriptionStates coin={coin} />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CoinDetail;
