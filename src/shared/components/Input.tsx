// import type { FieldValues } from "react-hook-form";
// import type { InputType } from "../../types/shared/input.type";
import type { BaseInputType } from "../../types/shared/base-input.type";

const Input = ({
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
  // inputRef,
  // register,
}: BaseInputType) => {
  // const registerProps = register(name);

  return (
    <div className="input">
      <label className="input__label" id={id}>
        {title}
      </label>
      <input
        // {...registerProps}
        className="input__field"
        name={name}
        type={type}
        placeholder={placeholder}
        maxLength={maxLength}
        onChange={onChange}
        onKeyDown={onKeyDown}
        // ref={(el) => {
        //   registerProps.ref(el);

        //   if (typeof inputRef === "function") {
        //     inputRef(el);
        //   }
        // }}
      />
      {hasHint && hintText}
    </div>
  );
};

export default Input;
