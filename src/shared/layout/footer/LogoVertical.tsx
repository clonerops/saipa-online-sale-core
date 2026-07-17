import React from "react";
import { ReactSVG } from "react-svg";

const LogoVertical = () => {
  return (
    <div className="logo-vertical">
      <ReactSVG src="/svg/saipa-logo-124.svg" className="logo-vertical__logo" />
      <div className="logo-vertical__text-box">
        <div className="logo-vertical__text-1">سـامـانه فـروش اینترنتی</div>
        <div className="logo-vertical__text-2">گروه خودروسازی سایپا</div>
      </div>
    </div>
  );
};

export default LogoVertical;
