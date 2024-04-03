import Image from "next/image";
import React from "react";
import dateFormat from "dateformat";
import Link from "next/link";

interface NewsCardProps {
  news: {
    Title: string;
    Image: string;
    Description: string;
    url: string;
    source: {
      name: string;
    };
    publishedAt: string;
    TitleSentiment: {
      sentiment: string;
    };
  };
}

const NeewsCard = ({ news }: NewsCardProps) => {
  const date = dateFormat(news.publishedAt, "mediumDate");
  return (
    <div className="z-0 felx flex-col rounded-[10px] overflow-hidden w-[330px] lg:w-[430px] bg-white relative">
      <div className=" w-full lg:h-[200px] h-[150px]">
        <Image
          src={news?.Image}
          alt="newsImage"
          height={500}
          width={500}
          className=" w-full lg:h-[200px] h-[150px] object-cover"
        />
      </div>
      <div className=" p-5">
        <div className=" font-bold text-[15px] lg:text-[19px]">
          {news?.Title}
        </div>
        <div className=" whitespace-normal overflow-hidden py-1 lg:py-2 font-light text-gray-400">
          {news?.Description}
        </div>
        <div>
          <div className=" flex justify-between items-center  w-[300px] lg:w-[400px] text-[10px] lg:text-[15px] font-medium">
            <div className=" text-gray-500">{date}</div>
            <div
              className={`font-semibold text-[16px] ${
                news.TitleSentiment.sentiment === "positive"
                  ? "text-green-500"
                  : "text-red-500"
              }`}
            >
              {news.TitleSentiment.sentiment}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NeewsCard;
