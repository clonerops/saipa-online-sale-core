import { useRef } from "react";
import { useForm, type Path, type SubmitHandler } from "react-hook-form";
import Input from "../../../shared/components/Input";

import OtpFields from "../../../utils/json/otp-fields.json";
import type { OtpFormType } from "../../../types/auth/otp/otp.type";
import Button from "../../../shared/components/Button";

const OtpForm = () => {
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  const { register, handleSubmit } = useForm<OtpFormType>();

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number,
  ) => {
    if (e.target.value && index < OtpFields.length - 1) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (
    e: React.KeyboardEvent<HTMLInputElement>,
    index: number,
  ) => {
    if (e.key === "Backspace" && !e.currentTarget.value && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const onSubmit: SubmitHandler<OtpFormType> = (data) => {
    console.log(data);
  };

  return (
    <form className="otp__form" onSubmit={handleSubmit(onSubmit)}>
      <div className="otp__form-code">
        {OtpFields.map((item, index) => (
          <Input
            id={item.id}
            name={item.name as Path<OtpFormType>}
            placeholder={item.placeholer}
            title={item.title}
            type="text"
            maxLength={1}
            inputRef={(el) => {
              inputRefs.current[index] = el;
            }}
            onChange={(e: any) => handleChange(e, index)}
            onKeyDown={(e: any) => handleKeyDown(e, index)}
            register={register}
          />
        ))}
      </div>
      <div className="otp__header-text-mobile">
        مهلت باقیمانده:
        <span className="otp__header-text-edit">02:59</span>
      </div>
      <Button className="btn__oranged" text="ورود نمایندگان" />
    </form>
  );
};

export default OtpForm;
