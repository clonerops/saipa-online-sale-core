import { ReactSVG } from "react-svg";

const LogoHorizontal = () => {
  return (
    <div className="logo-horizontal">
      <ReactSVG src="/svg/saipa-logo-53.svg" className="logo-horizontal__svg" />
      <div className="logo-horizontal__text-box">
        <div className="logo-horizontal__text-1">سـامـانه فـروش اینترنتی</div>
        <div className="logo-horizontal__text-2">گروه خودروسازی سایپا</div>
      </div>
    </div>
  );
};

export default LogoHorizontal;
