import AllNews from "@/components/(news)/AllNews";
import Headings from "@/components/Headings";
import React from "react";

const News = () => {
  return (
    <div>
      <Headings title="Crypto News" />
      <AllNews batchSize={30} />
    </div>
  );
};

export default News;
