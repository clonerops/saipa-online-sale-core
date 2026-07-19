import type { FieldValues, UseFormRegister } from "react-hook-form";

import type { BaseInputType } from "../shared/base-input.type";

export type CaptchaType<T extends FieldValues> = BaseInputType<T> & {
  register: UseFormRegister<T>;
};
