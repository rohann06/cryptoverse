import React from "react";
import { LuLoader2 } from "react-icons/lu";

const Loading = ({ className }: { className?: string }) => {
  return (
    <div className={`text-xl flex justify-center items-center ${className}`}>
      <LuLoader2 className=" animate-spin delay-200 text-[#00224D]" />
    </div>
  );
};

export default Loading;
