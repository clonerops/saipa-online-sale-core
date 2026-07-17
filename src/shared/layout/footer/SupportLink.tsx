import { Link } from "react-router";
import { ReactSVG } from "react-svg";

interface DataModel {
  id: number;
  title: string;
  sub: string;
  to: string;
  src: string;
}

interface IProps {
  title: string;
  data: DataModel[];
}

const SupportLinks = ({ data, title }: IProps) => {
  return (
    <div className="support-links">
      <span className="support-links__label">{title}</span>
      <ul className="support-links__lists">
        {data.map((item: DataModel) => (
          <Link key={item.id} to={item.to}>
            <li className="support-links__list">
              <ReactSVG src={item.src} className="support-links__list-icon" />
              <div className="support-links__list-text-box">
                <span className="support-links__list-title">{item.title}</span>
                <span className="support-links__list-sub">{item.sub}</span>
              </div>
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default SupportLinks;
