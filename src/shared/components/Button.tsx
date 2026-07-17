import { ReactSVG } from "react-svg";

interface IProps {
  type?: "rounded";
  className?: string;
  text: string;
}

const Button = ({ type, className, text }: IProps) => {
  return (
    <button className={`btn ${className}`}>
      {type === "rounded" ? <ReactSVG src="svg/arrow-left.png" /> : text}
    </button>
  );
};

export default Button;
