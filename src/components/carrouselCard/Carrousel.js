import useFetchMedia  from '../../hooks/useFetchMedia';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { A11y, Autoplay, FreeMode,Keyboard,Pagination } from "swiper";
import CarrouselCard from "./CarrouselCard";


const Carrousel = ({media }) => {
  
const content = useFetchMedia(media)
  
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
        {content.slice(0,10).map((media) => (
          <SwiperSlide key={media.id}>
            <CarrouselCard
              id={media.id}
              title={media.title}
              name={media.name}
              src={`https://image.tmdb.org/t/p/w300/${media.poster_path}`}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
export default Carrousel;