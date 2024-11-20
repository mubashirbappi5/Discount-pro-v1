import React from 'react';
import { useLoaderData } from 'react-router-dom';
import BrandCards from '../Components/BrandCards';

const Brands = () => {
    const data = useLoaderData()
    return (
        <div className='w-11/12 mx-auto'>
            <section className='space-y-10'>
           <div className=' flex flex-col gap-2 items-center'>
           <h1 className='text-3xl font-bold'>All Brands</h1>
           <h4 className='text-lg font-semibold'>Unbeatable Deals from Your Favorite Brands</h4>
           <label className="input input-bordered w-[600px] flex items-center pr-0 ">
  <input type="text" className="grow" placeholder="Start typing to find your discount" />
  <button className='btn bg-green-400 font-semibold'> search</button>
</label>
           </div>
          <div className='space-y-4'> 
          {
            data.map(data=> <BrandCards key={data._id} data={data}/>)
           }
          </div>

            
            </section>
        </div>
    );
};

export default Brands;