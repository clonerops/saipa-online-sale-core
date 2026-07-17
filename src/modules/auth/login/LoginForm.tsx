import { useState } from "react";
import { ReactSVG } from "react-svg";

import Button from "../../../shared/components/Button";
import Input from "../../../shared/components/Input";

const LoginForm = () => {
  const [password, setPassword] = useState<boolean>(false);

  const actionShowPasswordState = () => setPassword(!password);

  return (
    <form className="form">
      <Input
        id="nationalcode"
        name="nationalcode"
        title="کدملی"
        placeholder="کدملی خود را وارد کنید"
        type="text"
      />
      <div className="form__password-box">
        <Input
          id="password"
          name="password"
          title="رمز عبور"
          placeholder="کلمه عبور خود را وارد کنید"
          type={password ? "text" : "password"}
        />
        <ReactSVG
          src={password ? "/svg/eye.svg" : "/svg/eye-slash.svg"}
          className="input__icon"
          onClick={actionShowPasswordState}
        />
      </div>
      <div className="captcha">
        <Input
          id="captcha"
          name="captcha"
          title="تصویر امنیتی"
          placeholder="کد روبرو را وارد کنید"
          type="text"
        />
        <div className="captcha__box">
          <ReactSVG
            src="/svg/refresh-arrow2.svg"
            className="captcha__box-refresh"
          />
          <img
            src="images/captcha.png"
            className="captcha__box-img"
            alt="Captcha"
          />
        </div>
      </div>
      <Button text="ورود" className="btn__oranged" />
    </form>
  );
};

export default LoginForm;
