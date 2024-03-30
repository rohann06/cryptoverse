import React from "react";

interface StateProps {
  icon: any;
  title: string;
  value: any;
}

const State = ({ icon, title, value }: StateProps) => {
  return (
    <div className=" flex justify-between items-center">
      <p className=" flex items-center gap-x-1 text-[19px] font-light">
        <span className=" text-[18px] mb-1">{icon}</span>
        {title}
      </p>
      <p className=" text-[20px] font-bold">{value} </p>
    </div>
  );
};

export default State;
