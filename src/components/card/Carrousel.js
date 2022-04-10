import React from "react";
import '.././../index.css'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { A11y, Autoplay, FreeMode,Pagination } from "swiper";
import InfoCard from "./InfoCard";
 
const Carrousel = () => {


  return (
    <div>
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
          pauseOnMouseEnter:true
        }}
        a11y= {{
        prevSlideMessage: 'Previous slide',
        nextSlideMessage: 'Next slide',
        }}
      
        modules={[FreeMode, Autoplay, Pagination,A11y]}
        className="mySwiper"
      >
        <SwiperSlide>
          <InfoCard 
            link={}
            title={}
              src ={}
              alt={}

          />
        </SwiperSlide>
       
      </Swiper>
    </div>
  );
}
export default Carrousel;