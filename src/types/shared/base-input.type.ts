import type {
  ChangeEventHandler,
  KeyboardEventHandler,
  ReactNode,
} from "react";
// import type { FieldValues, Path } from "react-hook-form";

export type BaseInputType = {
  id: string;
  title: string;
  type: string;
  placeholder: string;
  hasHint?: boolean;
  hintText?: string | ReactNode;
  maxLength?: number;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  onKeyDown?: KeyboardEventHandler<HTMLInputElement>;
  inputRef?: React.Ref<HTMLInputElement>;

  name: string;
};
