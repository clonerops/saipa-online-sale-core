import { ReactSVG } from "react-svg";

import Button from "../components/Button";
import UserReviews from "./UserReviews";

const Hero = () => {
  return (
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
        <ReactSVG src="/svg/saipa-logo-124.svg" className="hero__banner-logo" />
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
              <div className="hero__banner-advertisement-text">اعتماد ملی</div>
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
              <div className="hero__banner-advertisement-text">کیفیت محصول</div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Hero;
