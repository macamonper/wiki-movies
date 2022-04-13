import { useState } from "react";
import useFetchCategory from '../../hooks/useFetchCategory';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { Box } from "@mui/system";
import { A11y, Autoplay, FreeMode,Keyboard,Pagination } from "swiper";
import CarrouselCard from "../Card/CarrouselCard";




const CategoryCarrousel = ({ type, category }) => {
  
  const [page, setPage] = useState(1);
  
  const content = useFetchCategory(type, category,page);
  
  return (
    <Box>
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
       {content.content.slice(0,10).map((media) => (
          <SwiperSlide key={media.id}>
            <CarrouselCard id={media.id}
              title={media.title}
              name={media.name}
              src={`https://image.tmdb.org/t/p/w300/${media.poster_path}`}
              type={type}
            />
          </SwiperSlide>
        ))} 
      </Swiper>
    </Box>
  );
}
export default CategoryCarrousel;