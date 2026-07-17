import { Link } from "react-router";

interface DataModel {
  id: number;
  title: string;
  to: string;
}

interface IProps {
  title: string;
  data: DataModel[];
}

const PopularLinks = ({ data, title }: IProps) => {
  return (
    <div className="popular-links">
      <span className="popular-links__label">{title}</span>
      <ul className="popular-links__lists">
        {data.map((item: DataModel) => (
          <Link key={item.id} to={item.to}>
            <li className="popular-links__list">
              <span className="popular-links__list-text">{item.title}</span>
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default PopularLinks;
