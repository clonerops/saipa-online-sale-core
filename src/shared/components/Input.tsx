import type { FieldValues } from "react-hook-form";
import type { InputType } from "../../types/shared/input.type";

const Input = <T extends FieldValues>({
  id,
  title,
  name,
  type,
  placeholder,
  hasHint,
  hintText,
  register,
}: InputType<T>) => {
  return (
    <div className="input">
      <label className="input__label" id={id}>
        {title}
      </label>
      <input
        {...register(name)}
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
