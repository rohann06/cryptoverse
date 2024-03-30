import CoinDetail from "@/components/(coinDetails)/CoinDetail";
import React from "react";

const CoinDetails = ({ params }: { params: { slug: string } }) => {
  return (
    <div>
      <CoinDetail uuid={params?.slug} />
    </div>
  );
};

export default CoinDetails;
