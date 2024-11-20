import React from 'react';

const CouponCard = ({coupon,shop_link}) => {
    
   const {coupon_code,description,expiry_date,condition,coupon_type} = coupon
    return (
        <div>
            <div className='border p-5 w-72  rounded-xl bg-orange-400 space-y-5'>
               <h1 className='text-3xl w-10/12 mx-auto font-bold text-center'>{description}</h1>
               
              <div className='text-center space-y-2'>
              <h4 className='text-[#333333]'>{coupon_type}</h4>
              <h4 className='text-[#5C4033]'>{condition}</h4>
              </div>
              <div className="border-b-8 border-dotted "></div>
               <div className='flex justify-between mt-10'>
               <div>
                <p>{expiry_date}</p>
                <h2>{coupon_code}</h2>
               </div>
               <button className='btn'> <a href={shop_link}>Shop Now</a></button>

               </div>
            </div>
            
        </div>
    );
};

export default CouponCard;