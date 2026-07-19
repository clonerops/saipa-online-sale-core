import { Link } from "react-router";
import { ReactSVG } from "react-svg";

import LoginForm from "./LoginForm";

const Login = () => {
  return (
    <div className="container">
      <div className="login">
        <div className="login__header">
          <ReactSVG src="/svg/saipa-logo-124.svg" className="login__logo" />
          <div className="login__header-text-1">ورود به حساب کاربری</div>
          <div className="login__header-text-2">
            حساب کاربری ندارید؟
            <Link to={"/register"} className="login__header-text-register">
              ثبت نام کنید
            </Link>
          </div>
        </div>
        {/* START FORM */}
        <LoginForm />
        {/* END FORM */}
        <Link to={"/"} className="login__forget">
          کلمه عبور خود را فراموش کرده ام
        </Link>

        <Link to={"/"} className="login__dealer">
          ورود نمایندگان
        </Link>
      </div>
    </div>
  );
};

export default Login;
