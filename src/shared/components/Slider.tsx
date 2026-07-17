import { Swiper } from "swiper/react";
import type { ReactNode } from "react";

import { Autoplay, Navigation } from "swiper/modules";
import { ReactSVG } from "react-svg";

import "swiper/css";
import "swiper/css/navigation";

interface IProps {
  title: string;
  slidesPerView?: number;
  spaceBetween?: number;
  children: ReactNode;
  hasNavigation?: boolean;
}

const Slider = ({
  title,
  slidesPerView,
  spaceBetween,
  hasNavigation = true,
  children,
}: IProps) => {
  return (
    <div className="slider">
      <div className="slider__header">
        <div className="slider__title">{title}</div>
        {hasNavigation && (
          <div className="slider__navigation">
            <div className="slider__next">
              <ReactSVG
                src="/svg/arrow-slide.svg"
                className="slider__next-arrow"
              />
            </div>
            <div className="slider__prev">
              <ReactSVG
                src="/svg/arrow-slide.svg"
                className="slider__prev-arrow"
              />
            </div>
          </div>
        )}
      </div>
      <div className="slider__wrapper">
        <Swiper
          slidesPerView={slidesPerView}
          spaceBetween={spaceBetween}
          modules={[Navigation, Autoplay]}
          navigation={{
            nextEl: ".slider__next",
            prevEl: ".slider__prev",
          }}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          className="slider__content-box"
        >
          {children}
        </Swiper>
      </div>
    </div>
  );
};

export default Slider;
