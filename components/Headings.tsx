import React from "react";

const Headings = ({ title }: { title: string }) => {
  return (
    <p className=" text-[22px] lg:text-[30px] font-bold lg:font-semibold text-center md:text-left">
      {title}
    </p>
  );
};

export default Headings;
