import React from "react";
import CoinDetailHeading from "./CoinDetailHeading";
import State from "./State";
import millify from "millify";

//Icons
import { FaHashtag } from "react-icons/fa";
import { BiSolidDollarCircle } from "react-icons/bi";
import { BsCurrencyExchange } from "react-icons/bs";
import { SiCoinmarketcap } from "react-icons/si";
import { HiMiniTrophy } from "react-icons/hi2";
import { VscGraphLine } from "react-icons/vsc";
import { PiGraphBold } from "react-icons/pi";
import { RiExchangeFill } from "react-icons/ri";
import { GiCheckMark } from "react-icons/gi";
import { IoClose } from "react-icons/io5";

interface CoinDescriptionStatesProps {
  coin: {
    name: string;
    price: string;
    rank: number;
    marketCap: string;
    change: string;
    numberOfMarkets: number;
    numberOfExchanges: number;
    allTimeHigh: {
      price: string;
    };
    supply: {
      confirmed: boolean;
      total: string;
      circulating: string;
    };
  };
}

const CoinDescriptionStates = ({ coin }: CoinDescriptionStatesProps) => {
  return (
    <div className=" flex flex-col lg:flex-row  justify-between items-center gap-[50px] lg:gap-[10px]">
      <div className=" lg:w-[50%] ">
        <CoinDetailHeading
          description={`An overview showing the stats of ${coin?.name}, such as base and quate currency,
          the rank, and trading volume.`}
          title={`${coin?.name} Value Statistics`}
        />
        <div className=" flex flex-col gap-y-3 lg:gap-y-5 lg:px-8 lg:py-3">
          <State
            icon={<BiSolidDollarCircle />}
            title={"Price to USD"}
            value={`$ ${millify(+coin.price)}`}
          />
          <hr />
          <State
            icon={<FaHashtag />}
            title={"Rank"}
            value={millify(coin.rank)}
          />
          <hr />
          <State
            icon={<SiCoinmarketcap />}
            title={"MarketCap"}
            value={millify(+coin.marketCap)}
          />
          <hr />
          <State
            icon={<HiMiniTrophy />}
            title={"All Time High(daily avg.)"}
            value={millify(+coin.allTimeHigh.price)}
          />
          <hr />
          <State
            icon={<VscGraphLine />}
            title={"Change"}
            value={
              <div
                className={`${
                  +coin.change < 0 ? "text-red-500" : "text-green-500"
                }`}
              >
                {+coin.change}%
              </div>
            }
          />
          <hr />
        </div>
      </div>

      <div className=" lg:w-[50%]">
        <CoinDetailHeading
          description={`An overview showing the stats of all cryptocurrencies.`}
          title={`${coin?.name} Value Statistics`}
        />
        <div className=" lg:mt-7 flex flex-col gap-y-3 lg:gap-y-5 lg:px-8 lg:py-3">
          <State
            icon={<PiGraphBold />}
            title={"Number Of Markets"}
            value={`$ ${millify(coin.numberOfMarkets)}`}
          />
          <hr />
          <State
            icon={<FaHashtag />}
            title={"Numebr Of Exchanges"}
            value={millify(coin.numberOfExchanges)}
          />
          <hr />
          <State
            icon={<SiCoinmarketcap />}
            title={"Approved Supply"}
            value={
              <div>
                {coin.supply.confirmed === true ? (
                  <p className=" text-green-500">
                    <GiCheckMark />
                  </p>
                ) : (
                  <p className=" text-red-500">
                    <IoClose />
                  </p>
                )}
              </div>
            }
          />
          <hr />
          <State
            icon={<BsCurrencyExchange />}
            title={"Total Supply"}
            value={millify(+coin.supply.total)}
          />
          <hr />
          <State
            icon={<RiExchangeFill />}
            title={"Circulating Supply"}
            value={millify(+coin.supply.circulating)}
          />
          <hr />
        </div>
      </div>
    </div>
  );
};

export default CoinDescriptionStates;
