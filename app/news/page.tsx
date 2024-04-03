import AllNews from "@/components/(news)/AllNews";
import Headings from "@/components/Headings";
import React from "react";

const News = () => {
  return (
    <div>
      <Headings title="Crypto News" />
      <AllNews key="allNews" batchSize={25} />
    </div>
  );
};

export default News;
