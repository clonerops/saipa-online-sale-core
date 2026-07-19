import { useNavigate } from "react-router";
import { ReactSVG } from "react-svg";

const BackPage = () => {
  const navigate = useNavigate();

  return (
    <div className="back-page" onClick={() => navigate(-1)}>
      <ReactSVG src="/svg/arrow-right.svg" className="back-page__icon" />
      <div className="back-page__text">بازگشت</div>
    </div>
  );
};

export default BackPage;
