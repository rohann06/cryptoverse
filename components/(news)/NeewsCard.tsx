import Image from "next/image";
import React from "react";
import { FaBitcoin } from "react-icons/fa";
import dateFormat from "dateformat";

interface NewsCardProps {
  news: {
    title: string;
    urlToImage: string;
    description: string;
    url: string;
    source: {
      name: string;
    };
    publishedAt: string;
  };
}

const NeewsCard = ({ news }: NewsCardProps) => {
  const date = dateFormat(news.publishedAt, "mediumDate");
  return (
    <div className="z-0 felx flex-col rounded-[10px] overflow-hidden h-[320px] w-[330px] lg:h-[400px] lg:w-[430px] bg-white relative">
      <div className=" w-full lg:h-[200px] h-[150px]">
        <Image
          src={news?.urlToImage}
          alt="newsImage"
          height={500}
          width={500}
          className=" w-full lg:h-[200px] h-[150px] object-cover"
        />
      </div>
      <div className=" p-5">
        <div className=" font-bold text-[15px] lg:text-[19px]">{news?.title}</div>
        <div className=" whitespace-normal h-[56px] lg:h-[60px] overflow-hidden py-1 lg:py-2 font-light text-gray-400">
          {news?.description}
        </div>
        <div>
          <div className=" absolute w-[300px] lg:w-[400px] bottom-3 text-[10px] lg:text-[15px] font-medium">
            <div className=" text-gray-500">{date}</div> 
          </div>
        </div>
      </div>
    </div>
  );
};

export default NeewsCard;
