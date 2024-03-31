import React from "react";
import CoinDetailHeading from "./CoinDetailHeading";

interface CoinDescriptionStatesLinksProps {
  coin: {
    name: string;
    links: any;
  };
}

const CoinDescriptionStatesLinks = ({
  coin,
}: CoinDescriptionStatesLinksProps) => {
  return (
    <div>
      <CoinDetailHeading title={`${coin?.name} Links`} />

      {coin?.links?.map((link: any, i: number) => (
        <>
          <div key={i} className=" flex justify-between items-center py-5">
            <p className=" flex items-center gap-x-1 text-[16px] lg:text-[20px] font-semibold">
              <span className=" text-[15px] lg:text-[18px]">{i + 1}. </span>
              {link?.name}
              <p className=" text-[15px] lg:block hidden font-light">({link?.type})</p>
            </p>
            <a
              href={link?.url}
              target="_blank"
              className=" text-[14px] lg:text-[17px] font-semibold text-blue-500 w-[20%] lg:overflow-hidden overflow-scroll"
            >
              {link?.url}{" "}
            </a>
          </div>
          <hr />
        </>
      ))}
    </div>
  );
};

export default CoinDescriptionStatesLinks;
