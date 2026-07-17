import type { ReactNode } from "react";

interface IProps {
  id: string;
  title: string;
  name: string;
  type: string;
  placeholder: string;
  hasHint?: boolean;
  hintText?: string | ReactNode;
}

const Input = ({
  id,
  title,
  name,
  type,
  placeholder,
  hasHint,
  hintText,
}: IProps) => {
  return (
    <div className="input">
      <label className="input__label" id={id}>
        {title}
      </label>
      <input
        className="input__field"
        name={name}
        type={type}
        placeholder={placeholder}
      />
      {hasHint && hintText}
    </div>
  );
};

export default Input;
