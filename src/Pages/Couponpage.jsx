import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import CouponCard from '../Components/CouponCard';

const Couponpage = () => {
    const data = useLoaderData()
    const {id} = useParams()
    console.log(id)
    const brand = data.find(item => item._id === id)
     console.log(brand)
     const {brand_name,brand_logo,rating,coupons} = brand
    
    return (
        <div className='w-11/12 mx-auto '>
            <h1 className='text-center text-4xl font-bold'>Coupon</h1>
           <section className='border rounded-md'>
            <div className='flex justify-between items-center'>
                <img className='w-36 rounded-full border-2' src={brand_logo} alt="" />
                <h1 className='text-xl font-bold'>{brand_name}</h1>
                <h2>{rating}</h2>
            </div>


           </section>
           <section className='flex justify-evenly items-center'>
            {
                coupons.map((coupon,idx) => <CouponCard key={idx} coupon={coupon}/>)
            }
           </section>
            
        </div>
    );
};

export default Couponpage;