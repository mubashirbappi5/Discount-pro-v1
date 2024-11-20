import React from 'react';
import { useNavigate } from 'react-router-dom';
import "animate.css";

const BrandCards = ({data}) => {
    const {brand_name,brand_logo,description,rating,isSaleOn,_id} = data
    const navigate = useNavigate()
    const handleviewcoupon = ()=>{
      navigate(`/brands/${_id}`)

    }
    return (
        <div>
           <div className="card bg-base-100 w-10/12 mx-auto border">
  <figure className="px-10 pt-10">
    <img
      src={brand_logo}
      alt="brand"
      className="rounded-full border  border-green-600 w-40 h-40 p-5" />
  </figure>
  <div className="card-body ">
  <div className='flex justify-between'>
   
   <p className='flex items-center gap-2'> 
   <div className="rating">
 <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
 <input
   type="radio"
   name="rating-2"
   className="mask mask-star-2 bg-orange-400"
   defaultChecked />
 <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
 <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
 
</div>
   <span className='text-lg font-bold'>{rating}</span>
     </p>
   {
       isSaleOn && <h1 className='flex items-center gap-2 animate__animated animate__bounce animate__infinite animate__slow'><img src="https://img.icons8.com/?size=100&id=97WBBzi56mor&format=png&color=000000" alt="" className='w-10' /> <span className='text-lg font-semibold text-pink-600'>sale is on</span></h1>
   }
   </div>
    <h2 className=" text-center text-5xl font-bold">{brand_name}</h2>
    <p className='text-center'>{description}</p>
    
    <div className="card-actions flex justify-center">
      <button onClick={handleviewcoupon} className="btn bg-green-400">View Coupons</button>
    </div>
  </div>
</div>
            
        </div>
    );
};

export default BrandCards;