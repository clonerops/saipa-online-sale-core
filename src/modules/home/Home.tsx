import { ReactSVG } from "react-svg";

import NavigationIntoApp from "../../shared/layout/header/NavigationIntoApp";
import Button from "../../shared/components/Button";
import UserReviews from "../../shared/content/UserReviews";
import ProductCard from "../../shared/content/ProductCard";
import Slider from "../../shared/components/Slider";

import FiltersDATA from "../../utils/json/filter-card.json";
import BestSellerDATA from "../../utils/json/best-seller-products.json";
import { SwiperSlide } from "swiper/react";
import FilterCard from "../../shared/content/FilterCard";

const Home = () => {
  return (
    <div className="home">
      <NavigationIntoApp />

      <div className="home__content">
        <div className="hero">
          <div className="hero__content">
            <div className="hero__content-text-box">
              <div className="hero__content-text-1">
                سایپا؛ همراه مسیر توسعه ایران
              </div>
              <div className="hero__content-text-2">
                سـامـانه فــروش اینتـرنتـی <br /> گروه خودروسازی{" "}
                <span className="hero__content-text-3">سایپا</span>
              </div>
              <div className="hero__content-text-4">همپای مهربان ایرانیان</div>
            </div>
            <div className="hero__content-btn-box">
              <Button text="مشاهده محصولات" className="btn__oranged" />
              <Button text="راهنمای خرید" className="btn__transparent" />
            </div>
            <div className="hero__content-users">
              <UserReviews />
            </div>
          </div>
          <div className="hero__banner">
            <ReactSVG
              src="/svg/saipa-logo-124.svg"
              className="hero__banner-logo"
            />
            <img
              src="/images/saipa-sale-cover.png"
              className="hero__banner-changan"
              alt="Changan"
            />
            <div className="hero__banner-advertisement">
              <ul className="hero__banner-advertisement-lists">
                <li className="hero__banner-advertisement-list">
                  <ReactSVG
                    src="/svg/star.svg"
                    className="hero__banner-advertisement-icon"
                  />
                  <div className="hero__banner-advertisement-text">
                    نوآوری پایدار
                  </div>
                </li>
                <li className="hero__banner-advertisement-list">
                  <ReactSVG
                    src="/svg/people.svg"
                    className="hero__banner-advertisement-icon"
                  />
                  <div className="hero__banner-advertisement-text">
                    اعتماد ملی
                  </div>
                </li>
                <li className="hero__banner-advertisement-list">
                  <ReactSVG
                    src="/svg/color-swatch.svg"
                    className="hero__banner-advertisement-icon"
                  />
                  <div className="hero__banner-advertisement-text">
                    خدمات گسترده
                  </div>
                </li>
                <li className="hero__banner-advertisement-list">
                  <ReactSVG
                    src="/svg/setting-2.svg"
                    className="hero__banner-advertisement-icon"
                  />
                  <div className="hero__banner-advertisement-text">
                    کیفیت محصول
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="product-box">
          <Slider title="محصولات پرفروش" slidesPerView={2} spaceBetween={16}>
            {BestSellerDATA.map((item: any) => (
              <SwiperSlide>
                <ProductCard ratio="product-land" />
              </SwiperSlide>
            ))}
          </Slider>
        </div>

        <div className="filter-box">
          <Slider title="طرح های فروش" slidesPerView={6} spaceBetween={24}>
            {FiltersDATA.map((item: any) => {
              return (
                <SwiperSlide>
                  <FilterCard image={item.image} title={item.title} />
                </SwiperSlide>
              );
            })}
          </Slider>
        </div>

        <div className="home__products">
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>

        <div className="product-box">
          <Slider title="فروش فوری" slidesPerView={2} spaceBetween={16}>
            {BestSellerDATA.map((item: any) => (
              <SwiperSlide>
                <ProductCard ratio="product-land" />
              </SwiperSlide>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Home;
