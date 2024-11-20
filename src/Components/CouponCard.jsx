import React from 'react';

const CouponCard = ({coupon}) => {
    
   const {coupon_code,description,expiry_date,condition,coupon_type} = coupon
    return (
        <div>
            <div className='border p-5 w-72  rounded-xl bg-orange-400'>
               <h1 className='text-3xl w-10/12 mx-auto font-bold text-center'>{description}</h1>
               
              <div className='text-center'>
              <h4>{coupon_type}</h4>
              <h4 className='text-green-500'>{condition}</h4>
              </div>
              <div className="border-b-8 border-dotted "></div>
               <div>
                <p>{expiry_date}</p>
                <h2>{coupon_code}</h2>
               </div>
               <button>shop</button>

            </div>
            
        </div>
    );
};

export default CouponCard;