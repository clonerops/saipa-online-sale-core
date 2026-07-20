import { useState } from "react";
import { ReactSVG } from "react-svg";

import Input from "./Input";

import type { BaseInputType } from "../../types/shared/base-input.type";

const PasswordInput = ({
  id,
  name,
  title,
  placeholder,
  // register,
}: BaseInputType) => {
  const [password, setPassword] = useState<boolean>(false);
  const actionShowPasswordState = () => setPassword(!password);

  return (
    <div className="form__password-box">
      <Input
        // register={register}
        id={id}
        name={name}
        title={title}
        placeholder={placeholder}
        type={password ? "text" : "password"}
        hasHint={true}
        hintText={
          <span className="input__field-hint">
            کلمه عبور باید به زبان انگلیسی و شامل 8 کاراکتر و متشکل از حروف بزرگ
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
  );
};

export default PasswordInput;
