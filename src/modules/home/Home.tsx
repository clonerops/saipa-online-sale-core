import { SwiperSlide } from "swiper/react";

import NavigationIntoApp from "../../shared/layout/header/NavigationIntoApp";
import ProductCard from "../../shared/content/ProductCard";
import Slider from "../../shared/components/Slider";
import Hero from "../../shared/content/Hero";
import FilterCard from "../../shared/content/FilterCard";
import Filter from "../../shared/content/Filter";

import FiltersDATA from "../../utils/json/filter-card.json";
import Products from "../../utils/json/products.json";

import type { IProduct } from "../../types/product/product.type";
import { useComponentStore } from "../../store/component.store";

const Home = () => {
  const activeFilterTab = useComponentStore((state) => state.activeFilter);

  const productFiltered = Products.filter(
    (item: { productTypeId: number }) => item.productTypeId === activeFilterTab,
  );

  return (
    <>
      <NavigationIntoApp />
      <div className="home">
        <div className="container">
          <div className="home__content">
            <Hero />

            <div className="product-box">
              <Slider
                title="محصولات پرفروش"
                slidesPerView={2}
                spaceBetween={16}
              >
                {Products.map((item: IProduct) => (
                  <SwiperSlide>
                    <ProductCard
                      key={item.id}
                      image={item.image}
                      logo={item.logo}
                      title={item.title}
                      label={item.label}
                      ratio="product-land"
                    />
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

            <Filter />

            <div className="home__products">
              {productFiltered.map((item: IProduct) => (
                <ProductCard
                  key={item.id}
                  image={item.image}
                  logo={item.logo}
                  title={item.title}
                  label={item.label}
                />
              ))}
            </div>

            <div className="product-box">
              <Slider title="فروش فوری" slidesPerView={2} spaceBetween={16}>
                {Products.map((item: IProduct) => (
                  <SwiperSlide>
                    <ProductCard
                      key={item.id}
                      image={item.image}
                      logo={item.logo}
                      title={item.title}
                      label={item.label}
                      ratio="product-land"
                    />
                  </SwiperSlide>
                ))}
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
