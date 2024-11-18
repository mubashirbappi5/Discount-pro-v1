import React from 'react';
import Banner from '../Components/Banner';
import TopBrands from '../Components/TopBrands';

const Home = () => {
    return (
        <div>
           <section>
            <Banner/>
           </section>
           <section className='my-10'>
            <TopBrands/>
           </section>
            
        </div>
    );
};

export default Home;