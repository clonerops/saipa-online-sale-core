import { ReactSVG } from "react-svg";

import Button from "../components/Button";

interface IProps {
  ratio?: string;
  label?: string;
  image: string;
  title: string;
  logo: string;
}

const ProductCard = ({
  ratio = "product-port",
  label,
  image,
  title,
  logo,
}: IProps) => {
  return (
    <div className={`product ${ratio}`}>
      <label className="product__label">{label}</label>
      <div className="product__img-box">
        <img src={image} className="product__img" />
      </div>
      <div className="product__content">
        <div className="product__text-box">
          <h3 className="product__text">{title}</h3>
          <ReactSVG src={logo} className="product__icon" />
        </div>
        <div className="product__feature-box">
          <span className="product__feature-box-span">طرح عادی</span>
          <span className="product__feature-box-span">فروش اعتباری</span>
        </div>
        <div className="product__info">
          <div className="product__info-box">
            <span className="product__info-box-title">حجم موتور</span>
            <span className="product__info-box-description">1.5 لیتر</span>
          </div>
          <div className="product__info-box">
            <span className="product__info-box-title">مصرف سوخت</span>
            <span className="product__info-box-description">1.5 لیتر</span>
          </div>
        </div>

        <div className="product__footer">
          <Button text="اطلاعات خودرو" className="btn__bordered-gray" />
          <Button text="انتخاب خودرو" className="btn__bordered-orange" />
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
