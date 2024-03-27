import React from "react";
import CryptoStateValue from "./CryptoStateValue";
import millify from "millify";

interface CoinStatsProps {
  globleState: {
    total: number;
    totalExchanges: number;
    totalMarketCap: number;
    total24hVolume: number;
    totalMarkets: number;
  };
  isLoading:boolean
}

const CoinStats = ({ globleState, isLoading }: CoinStatsProps) => {
  return (
    <div>
      <div>
        <p className=" text-[22px] lg:text-[30px] font-bold lg:font-semibold text-center md:text-left">
          Global Crypto Stats
        </p>
      </div>

      {/* Crypto stats */}
      <div className=" flex justify-between items-center flex-wrap gap-5 lg:gap-0 mt-[20px] lg:mt-[30px] lg:mr-32">
        <CryptoStateValue
          isLoading={isLoading}
          lable={"Total Cryptocurrencies:"}
          numbers={millify(globleState?.total)}
        />
        <CryptoStateValue
          isLoading={isLoading}
          lable={"Total Exchanges:"}
          numbers={millify(globleState?.totalExchanges)}
        />
        <CryptoStateValue
        isLoading={isLoading}
          lable={"Total Market Cap:"}
          numbers={millify(globleState?.totalMarketCap)}
        />
        <CryptoStateValue
        isLoading={isLoading}
          lable={"Total 24h Volume:"}
          numbers={millify(globleState?.total24hVolume)}
        />
        <CryptoStateValue
        isLoading={isLoading}
          lable={"Total Markets:"}
          numbers={millify(globleState?.totalMarkets)}
        />
      </div>
    </div>
  );
};

export default CoinStats;
