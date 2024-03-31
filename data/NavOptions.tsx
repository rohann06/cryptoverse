import { FaHome } from "react-icons/fa";
import { RiFundsFill } from "react-icons/ri";
import { AiFillMoneyCollect } from "react-icons/ai";
import { FaNewspaper } from "react-icons/fa6";

export const navOptions = [
  {
    name: "Home",
    icon: <FaHome />,
    href: "/",
  },
  {
    name: "Cryptocurrencies",
    icon: <RiFundsFill />,
    href: "/cryptocurrencies",
  },
  // {
  //   name: "Exchanges",
  //   icon: <AiFillMoneyCollect />,
  //   href: "/exchanges",
  // },
  {
    name: "News",
    icon: <FaNewspaper />,
    href: "/news",
  },
];
