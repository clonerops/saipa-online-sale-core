import { Link } from "react-router";
import { ReactSVG } from "react-svg";

import RegisterForm from "./RegisterForm";

const Register = () => {
  return (
    <div className="container">
      <div className="register">
        <div className="register__header">
          <ReactSVG src="/svg/saipa-logo-124.svg" className="register__logo" />
          <div className="register__header-text-1">ورود به حساب کاربری</div>
          <div className="register__header-text-2">
            قبلا ثبت نام کرده اید؟
            <Link to={"/login"} className="register__header-text-register">
              وارد شوید
            </Link>
          </div>
        </div>
        {/* START FORM */}
        <RegisterForm />
        {/* END FORM */}
        <div className="register__header-text-2">
          قبلا ثبت نام کرده اید؟
          <Link to={"/login"} className="register__header-text-register">
            وارد شوید
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Register;
