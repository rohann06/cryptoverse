import React from "react";
import { LuLoader2 } from "react-icons/lu";

const Loading = () => {
  return (
    <div className=" text-xl">
      <LuLoader2 className=" animate-spin delay-200 text-[#00224D]" />
    </div>
  );
};

export default Loading;
