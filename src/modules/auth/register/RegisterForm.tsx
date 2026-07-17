import { ReactSVG } from "react-svg";
import { useState } from "react";

import Button from "../../../shared/components/Button";
import Input from "../../../shared/components/Input";

const RegisterForm = () => {
  const [password, setPassword] = useState<boolean>(false);
  const [repeatPassword, setRepeatPassword] = useState<boolean>(false);

  const actionShowPasswordState = () => setPassword(!password);
  const actionRepeatShowPasswordState = () => setRepeatPassword(!password);

  return (
    <form className="form">
      <Input
        id="firstname"
        name="firstname"
        title="نام"
        placeholder="نام خود را وارد کنید"
        type="text"
      />

      <Input
        id="lastname"
        name="lastname"
        title="نام خانوادگی"
        placeholder="نام خانوادگی خود را وارد کنید"
        type="text"
      />

      <Input
        id="nationalcode"
        name="nationalcode"
        title="کدملی"
        placeholder="کدملی خود را وارد کنید"
        type="text"
      />

      <Input
        id="phone"
        name="phone"
        title="تلفن همراه"
        placeholder="تلفن همراه خود را وارد کنید"
        type="text"
      />

      <Input
        id="email"
        name="email"
        title="پست الکترونیک"
        placeholder="مانند: yourmail@gmail.com"
        type="text"
      />
      <div className="form__password-box">
        <Input
          id="password"
          name="password"
          title="تکرار کلمه"
          placeholder="کلمه عبور خود را وارد کنید"
          type={password ? "text" : "password"}
          hasHint={true}
          hintText={
            <span className="input__field-hint">
              کلمه عبور باید به زبان انگلیسی و شامل 8 کاراکتر و متشکل از حروف
              بزرگ
              <br /> و کوچک، عدد و یکی از نشانه‌های (*!@) باشد.
            </span>
          }
        />
        <ReactSVG
          src={password ? "/svg/eye.svg" : "/svg/eye-slash.svg"}
          className="input__icon"
          onClick={actionShowPasswordState}
        />
      </div>

      <div className="form__password-box">
        <Input
          id="repeat-password"
          name="repeat-password"
          title="تکرار کلمه"
          placeholder="کلمه عبور خود را وارد کنید"
          type={repeatPassword ? "text" : "password"}
        />
        <ReactSVG
          src={repeatPassword ? "/svg/eye.svg" : "/svg/eye-slash.svg"}
          className="input__icon"
          onClick={actionRepeatShowPasswordState}
        />
      </div>

      <div className="captcha">
        <Input
          id="repeat-password"
          name="repeat-password"
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
      <Button text="ثبت نام" className="btn__oranged" />
    </form>
  );
};

export default RegisterForm;
