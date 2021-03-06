import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { A11y, Autoplay, FreeMode, Keyboard, Pagination } from "swiper";
import CarrouselCard from "./CarrouselCard";
import useFetchTrending from "../../hooks/useFetchTrending";
import { selectImage } from "../../auxiliars/functions";

const Carrousel = ({ type }) => {
  const page = "1";
  const content = useFetchTrending(type, page);

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
          enabled: true,
        }}
        modules={[FreeMode, Autoplay, Pagination, A11y, Keyboard]}
        className="mySwiper"
      >
        {content.content.slice(0, 10).map((media) => (
          <SwiperSlide key={media.id}>
            <CarrouselCard
              title={media.title}
              name={media.name}
              src={selectImage(media, "w500")}
              id={media.id}
              type={type}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
export default Carrousel;
