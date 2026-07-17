import { Link } from "react-router";
import { ReactSVG } from "react-svg";

const Navigation = () => {
  return (
    <nav className="navigation">
      <ul className="navigation__lists">
        <li className="navigation__list">
          <Link to={"#"} className="navigation__link">
            <ReactSVG src="/svg/home.svg" className="navigation__icon" />
            <div className="navigation__text">خانه</div>
          </Link>
        </li>
        <li className="navigation__list">
          <Link to={"#"} className="navigation__link">
            <ReactSVG src="/svg/note.svg" className="navigation__icon" />
            <div className="navigation__text">درباره سایپا</div>
          </Link>
        </li>
        <li className="navigation__list">
          <Link to={"#"} className="navigation__link">
            <ReactSVG
              src="/svg/call-calling.svg"
              className="navigation__icon"
            />
            <div className="navigation__text">تماس با ما</div>
          </Link>
        </li>
        <li className="navigation__list">
          <Link to={"#"} className="navigation__link">
            <ReactSVG
              src="/svg/clipboard-tick.svg"
              className="navigation__icon"
            />
            <div className="navigation__text">قوانین و مقررات</div>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
