import React from "react";
import { TbPointFilled } from "react-icons/tb";

const CoinDetailHeading = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => {
  return (
    <div>
      <p className=" flex items-center gap-x-1 text-[17px] md:text-[20px] font-semibold">
        {" "}
        <TbPointFilled className=" text-[20px] md:text-[25px]" /> {title} 
      </p>
      <div className=" ml-5 md:ml-8 py-3 w-auto">
        <p className=" md:text-lg font-light text-gray-400 text-sm">
          {description}
        </p>
      </div>
    </div>
  );
};

export default CoinDetailHeading;
