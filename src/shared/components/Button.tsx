import { ReactSVG } from "react-svg";

interface IProps {
  type?: "rounded";
  className?: string;
  text: string;
  btnType?: "submit" | "button" | "reset";
}

const Button = ({ type, className, text, btnType }: IProps) => {
  return (
    <button type={btnType} className={`btn ${className}`}>
      {type === "rounded" ? <ReactSVG src="svg/arrow-left.png" /> : text}
    </button>
  );
};

export default Button;
