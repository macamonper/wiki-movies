import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { A11y, Autoplay, FreeMode,Keyboard,Pagination } from "swiper";
import CarrouselCard from "./CarrouselCard";
import useFetchType from '../../hooks/useFetchType';


const Carrousel = ({ type }) => {
  
const content = useFetchType(type)
  
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
          pauseOnMouseEnter: true,
        }}
        a11y={{
          prevSlideMessage: "Previous slide",
          nextSlideMessage: "Next slide",
        }}
        loop={true}
        keyboard={{
          enabled: true
        }}
        modules={[FreeMode, Autoplay, Pagination, A11y,Keyboard]}
        className="mySwiper"
      >
        {content.slice(0, 10).map((media) => (

          <SwiperSlide key={media.id}>
            <CarrouselCard
              title={media.title}
              name={media.name}
              src={`https://image.tmdb.org/t/p/w300/${media.poster_path}`}
              id={media.id}
              type={type}


            />
          </SwiperSlide>
         ))}
          </Swiper>
    </div>
  );
}
export default Carrousel;