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
  maxLength,
  onChange,
  onKeyDown,
  inputRef,
  register,
}: InputType<T>) => {
  const registerProps = register(name);

  return (
    <div className="input">
      <label className="input__label" id={id}>
        {title}
      </label>
      <input
        {...registerProps}
        className="input__field"
        name={name}
        type={type}
        placeholder={placeholder}
        maxLength={maxLength}
        onChange={onChange}
        onKeyDown={onKeyDown}
        ref={(el) => {
          registerProps.ref(el);

          if (typeof inputRef === "function") {
            inputRef(el);
          }
        }}
      />
      {hasHint && hintText}
    </div>
  );
};

export default Input;
