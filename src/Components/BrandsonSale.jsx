import React from 'react';

const BrandsonSale = ({data}) => {
    const {brand_name,category,brand_logo,coupons}=data
  
    return (
        <div>
            <div className="card bg-base-100 w-72 h-80 border-2">
  <figure className="px-10 pt-10">
    <span className='bg-red-500 p-2 text-white absolute top-0 left-14 rounded-b-md'>SALE</span>
    <img
      src={brand_logo}
      alt="Brands"
      className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center space-y-2">
    <h2 className="card-title text-2xl">{brand_name}</h2>
    <div className="tooltip  tooltip-left" data-tip="Category">
    <p className='border rounded-lg px-3 text-xs'>{category}</p>
</div>
    <h1 className='text-lg font-semibold'>Total Coupons:0{coupons.length}</h1>
   
  </div>
</div>
        </div>
    );
};

export default BrandsonSale;