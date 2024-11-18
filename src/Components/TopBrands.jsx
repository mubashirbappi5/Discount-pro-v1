import React from "react";
import Marquee from "react-fast-marquee";

const TopBrands = () => {
  return (
    <div>
      <h1 className="text-4xl font-bold text-center"> Top Brands </h1>
      <div>
      <Marquee pauseOnHover={true}>
       
        <h1 className="mr-10">puma</h1>
        <h1 className="mr-10">rokomari</h1>
        <h1 className="mr-10">addides</h1>
        <h1 className="mr-11">Apex</h1>
        
        </Marquee>
      </div>
    </div>
  );
};

export default TopBrands;
