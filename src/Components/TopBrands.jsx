import React from "react";


const TopBrands = ({data}) => {
  const {brand_logo} = data
  return (
    <div>
     
      <div>
        <img className="w-40" src={brand_logo} alt="" />
      
      </div>
    </div>
  );
};

export default TopBrands;
