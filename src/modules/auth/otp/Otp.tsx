import { Link } from "react-router";
import { ReactSVG } from "react-svg";
import OtpForm from "./OtpForm";
import BackPage from "../../../shared/components/BackPage";

const Otp = () => {
  return (
    <div className="container">
      <div className="otp">
        <BackPage />
        <div className="otp__header">
          <ReactSVG src="/svg/saipa-logo-124.svg" className="otp__logo" />
          <div className="otp__header-text-1">اعتبار سنجی شماره موبایل</div>
          <div className="otp__header-text-2">
            یک پیامک حاوی کد اعتبارسنجی برای شماره زیر ارسال شد.
          </div>
          <div className="otp__header-text-mobile">
            09217767345
            <Link to={"/register"} className="otp__header-text-edit">
              ویرایش شماره
            </Link>
          </div>
        </div>
        {/* START FORM */}
        <OtpForm />
        {/* END FORM */}
      </div>
    </div>
  );
};

export default Otp;
