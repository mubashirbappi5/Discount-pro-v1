import React from 'react';
import Banner from '../Components/Banner';
import TopBrands from '../Components/TopBrands';
import { useLoaderData } from 'react-router-dom';
import Marquee from 'react-fast-marquee';
import BrandsonSale from '../Components/BrandsonSale';

const Home = () => {
    const data = useLoaderData()
    console.log(data)
    
    return (
        <div>
           <section>
            <Banner/>
           </section>
           <section className='my-10 w-11/12 mx-auto'>
           <h1 className="text-4xl font-bold text-center"> Top Brands </h1>
           <Marquee pauseOnHover={true}>
       
           {
            data.filter(  data => data.rating >4.6).map(data=>  <TopBrands key={data.id} data={data}/>)
           }
        
        
        </Marquee>
           </section>
           <section className='w-11/12 mx-auto'>
                <h1 className='text-3xl font-bold text-center'>Brands on Sale</h1>

             <div className='grid grid-cols-4 gap-4 my-10'>
             {
                 data.filter(data=>data.isSaleOn===true).map(data=><BrandsonSale key={data.id} data={data}/>)  
              }
             </div>
           </section>
            
        </div>
    );
};

export default Home;