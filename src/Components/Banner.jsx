import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
const Banner = () => {
    return (
        <div className='px-10'>
            <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide><img className='rounded-md' src="https://i.ibb.co.com/BBRHg7h/Green-Modern-Headphone-Promotion-Banner.png" alt="" /></SwiperSlide>
        <SwiperSlide  ><img className='rounded-md' src="https://i.ibb.co.com/hyqcS7H/Brown-and-White-Simple-Coffee-Banner.png" alt="" /></SwiperSlide>
        <SwiperSlide  ><img className='rounded-md' src="https://i.ibb.co.com/2t0QjRx/Yellow-Bold-End-of-Season-Sale-Banner.jpg" alt="" /></SwiperSlide>
        <SwiperSlide  ><img className='rounded-md' src="https://i.ibb.co.com/nCNsXqZ/Purple-Orange-Organic-Memphis-Flash-Sale-Banner-Design.png" alt="" /></SwiperSlide>
        <SwiperSlide >
            <img  className='rounded-md' src="https://i.ibb.co.com/WsyLsHz/Red-White-Yellow-Modern-Minimalist-Shoes-New-Arrival-Promotion-Banner-Landscape.png" alt="" />
        </SwiperSlide>
        
      </Swiper>
        </div>
    );
};

export default Banner;