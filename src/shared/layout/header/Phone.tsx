import { ReactSVG } from "react-svg";

const Phone = () => {
  return (
    <div className="phone">
      <ReactSVG src="/svg/call-calling.svg" className="phone__icon" />
      <div className="phone__text">021 54945</div>
    </div>
  );
};

export default Phone;
