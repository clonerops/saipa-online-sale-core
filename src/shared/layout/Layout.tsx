import { Outlet } from "react-router";

import LogoHorizontal from "./header/LogoHorizontal";
import Navigation from "./header/Navigation";
import Phone from "./header/Phone";
import Button from "../components/Button";
import LogoVertical from "./footer/LogoVertical";
import PopularLinks from "./footer/PopularLinks";
import SupportLinks from "./footer/SupportLink";
import Enamad from "./footer/Enamad";

import PopularLinkData from "../../utils/json/footer-popular-links.json";
import SupportLinkData from "../../utils/json/footer-support-links.json";
import ServicesLinkData from "../../utils/json/footer-service-links.json";
import PreFooter from "./footer/PreFooter";

const Layout = () => {
  return (
    <>
      <header className="header">
        <LogoHorizontal />
        <Navigation />
        <Phone />
        <Button text="ورود/ثبت نام" className="btn__oranged" />
      </header>

      <main>
        <div className="container">
          <Outlet />
        </div>
      </main>
      <footer className="footer">
          <PreFooter />
        <div className="container">
          <div className="footer__box">
            <LogoVertical />
            <div className="footer__content">
              <div className="footer__links">
                <PopularLinks data={ServicesLinkData} title="خدمات ما" />
                <PopularLinks data={PopularLinkData} title="لینک های مرتبط" />
                <SupportLinks data={SupportLinkData} title="پشتیبانی مشتریان" />
              </div>
              <div className="footer__description">
                <Enamad />
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Layout;
