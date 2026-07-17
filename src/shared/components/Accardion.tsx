import { ReactSVG } from "react-svg";

const Accardion = () => {
  return (
    <details className="accordion">
      <summary className="accordion__header">
        <div className="accordion__title">برندهای خودرو</div>
        <ReactSVG src="/svg/arrow-down4.svg" className="accordion__arrow" />
      </summary>

      <div className="accordion__content">متن آکاردئون</div>
    </details>
  );
};

export default Accardion;
