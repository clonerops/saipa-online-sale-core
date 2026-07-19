import { ReactSVG } from "react-svg";

import Input from "./Input";

import type { CaptchaType } from "../../types/auth/captcha.type";
import type { FieldValues } from "react-hook-form";

const Captcha = <T extends FieldValues>({
  id,
  name,
  title,
  placeholder,
  register,
}: CaptchaType<T>) => {
  return (
    <div className="captcha">
      <Input
        register={register}
        id={id}
        name={name}
        title={title}
        placeholder={placeholder}
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
  );
};

export default Captcha;
