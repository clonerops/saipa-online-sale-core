import { useForm, type Path, type SubmitHandler } from "react-hook-form";
import Input from "../../../shared/components/Input";

import OtpFields from "../../../utils/json/otp-fields.json";
import type { OtpFormType } from "../../../types/auth/otp/otp.type";
import Button from "../../../shared/components/Button";

const OtpForm = () => {
  const { register, handleSubmit } = useForm<OtpFormType>();

  const onSubmit: SubmitHandler<OtpFormType> = (data) => {
    console.log(data);
  };

  return (
    <form className="otp__form" onSubmit={handleSubmit(onSubmit)}>
      <div className="otp__form-code">
        {OtpFields.map((item) => (
          <Input
            id={item.id}
            name={item.name as Path<OtpFormType>}
            placeholder={item.placeholer}
            title={item.title}
            type="text"
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
