import React from "react";
import { TbPointFilled } from "react-icons/tb";

const CoinDetailHeading = ({
  title,
  description,
}: {
  title: string;
  description?: string;
}) => {
  return (
    <div>
      <p className=" flex items-center gap-x-1 text-[17px] md:text-[23px] font-bold">
        {" "}
        {title}
      </p>
      <div className=" py-3 w-auto">
        <p className=" md:text-lg font-light text-gray-400 text-sm">
          {description}
        </p>
      </div>
    </div>
  );
};

export default CoinDetailHeading;
