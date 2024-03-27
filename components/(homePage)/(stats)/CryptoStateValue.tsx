import Loading from "@/components/Loading";
import React from "react";

interface CryptoStateValueProps {
  numbers: string;
  lable: string;
  isLoading: boolean;
}

const CryptoStateValue = ({
  numbers,
  lable,
  isLoading,
}: CryptoStateValueProps) => {
  return (
    <>
      <div className=" lg:shadow-lg lg:rounded-[10px] md:py-4 md:px-7 lg:w-[15rem]">
        <p className=" text-[15px] text-gray-400 font-medium">{lable}</p>
        {isLoading ? (
          <Loading />
        ) : (
          <p className=" font-semibold text-[26px] md:text-[32px]">{numbers}</p>
        )}
      </div>
    </>
  );
};

export default CryptoStateValue;
