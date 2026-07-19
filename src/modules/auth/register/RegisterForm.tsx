import { ReactSVG } from "react-svg";
import { useForm, type Path, type SubmitHandler } from "react-hook-form";

import Button from "../../../shared/components/Button";
import Input from "../../../shared/components/Input";

import RegisterFields from "../../../utils/json/register-fields.json";

import type { RegisterFormType } from "../../../types/auth/register/register.type";
import PasswordInput from "../../../shared/components/PasswordInput";
import Captcha from "../../../shared/components/Captcha";

const RegisterForm = () => {
  const { register, handleSubmit } = useForm<RegisterFormType>();

  const onSubmit: SubmitHandler<RegisterFormType> = (data) => {
    console.log(data);
  };

  return (
    <form className="form" onSubmit={handleSubmit(onSubmit)}>
      {RegisterFields.map((item) => (
        <Input
          key={item.id}
          id={item.id}
          name={item.name as Path<RegisterFormType>}
          placeholder={item.placeholer}
          title={item.title}
          type="text"
          register={register}
        />
      ))}
      <PasswordInput
        id="password"
        name="password"
        title="کلمه عبور"
        placeholder="کلمه عبور خود را وارد کنید"
        type="password"
        register={register}
      />
      <PasswordInput
        id="repeatPassword"
        name="repeatPassword"
        title="تکرار کلمه عبور"
        placeholder="تکرار کلمه عبور خود را وارد کنید"
        type="password"
        register={register}
      />
      <Captcha
        id="captchaCode"
        name="captchaCode"
        title="تصویر امنیتی"
        type="text"
        placeholder="کد روبرو را وارد کنید"
        register={register}
      />
      <Button text="ثبت نام" className="btn__oranged" />
    </form>
  );
};

export default RegisterForm;
