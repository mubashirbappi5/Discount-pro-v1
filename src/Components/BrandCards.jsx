import React from 'react';

const BrandCards = ({data}) => {
    const {brand_name,brand_logo,description,rating,isSaleOn} = data
    return (
        <div>
           <div className="card bg-base-100 w-10/12 mx-auto border">
  <figure className="px-10 pt-10">
    <img
      src={brand_logo}
      alt="brand"
      className="rounded-xl max-w-md" />
  </figure>
  <div className="card-body ">
    <h2 className=" text-center text-5xl font-bold">{brand_name}</h2>
    <p className='text-center'>{description}</p>
    <div className='flex justify-between'>
   
    <p>{rating}</p>
    {
        isSaleOn && <h1>sale is on</h1>
    }
    </div>
    <div className="card-actions flex justify-center">
      <button className="btn btn-primary">View Coupons</button>
    </div>
  </div>
</div>
            
        </div>
    );
};

export default BrandCards;