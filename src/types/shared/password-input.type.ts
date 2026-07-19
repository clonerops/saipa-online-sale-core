import type { FieldValues, UseFormRegister } from "react-hook-form";
import type { BaseInputType } from "./base-input.type";

export type PasswordInputType<T extends FieldValues> = BaseInputType<T> & {
  register: UseFormRegister<T>;
};
