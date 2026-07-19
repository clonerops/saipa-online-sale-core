import { useState } from "react";
import { ReactSVG } from "react-svg";

import Button from "../../../shared/components/Button";
import Input from "../../../shared/components/Input";
import { useForm, type SubmitHandler } from "react-hook-form";
import type { LoginFormType } from "../../../types/auth/login/login.type";

const LoginForm = () => {
  const [password, setPassword] = useState<boolean>(false);
  const actionShowPasswordState = () => setPassword(!password);

  const { register, handleSubmit } = useForm<LoginFormType>();

  const onSubmit: SubmitHandler<LoginFormType> = (data) => {
    console.log(data);
  };

  return (
    <form className="form" onSubmit={handleSubmit(onSubmit)}>
      <Input
        register={register}
        id="nationalcode"
        name="nationalcode"
        title="کدملی"
        placeholder="کدملی خود را وارد کنید"
        type="text"
      />

      <div className="form__password-box">
        <Input
          register={register}
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
          register={register}
          id="captchaCode"
          name="captchaCode"
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
