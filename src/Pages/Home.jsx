import React from 'react';
import Banner from '../Components/Banner';
import TopBrands from '../Components/TopBrands';
import { useLoaderData } from 'react-router-dom';
import Marquee from 'react-fast-marquee';

const Home = () => {
    const data = useLoaderData()
    console.log(data)
    return (
        <div>
           <section>
            <Banner/>
           </section>
           <section className='my-10'>
           <h1 className="text-4xl font-bold text-center"> Top Brands </h1>
           <Marquee pauseOnHover={true}>
       
           {
            data.filter(  data => data.rating >4.6).map(data=>  <TopBrands key={data.id} data={data}/>)
           }
        
        
        </Marquee>
           </section>
           <section>
                <h1 className='text-3xl font-bold text-center'>Brands on Sale</h1>

           </section>
            
        </div>
    );
};

export default Home;