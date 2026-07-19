import { ReactSVG } from "react-svg";
import { useComponentStore } from "../../store/component.store";
import type { IFilter } from "../../types/filter/filter.type";
import Filters from "../../utils/json/filters.json";

const Filter = () => {
  const activeFilter = useComponentStore((state) => state.activeFilter);
  const actionActiveFilter = useComponentStore(
    (state) => state.actionActiveFilter,
  );
  return (
    <div className="filter">
      <ul className="filter__lists">
        {Filters.map((item: IFilter) => (
          <li
            key={item.id}
            className={`filter__list ${activeFilter == item.id ? "active" : ""}`}
            onClick={() => actionActiveFilter(item.id)}
          >
            <button className="filter__btn">
              <ReactSVG src={item.icon} className="filter__svg" />
              <span className="filter__text">{item.title}</span>
            </button>
          </li>
        ))}
        <li className="filter__list">
          <button className="filter__btn">
            <ReactSVG src="/svg/clipboard-tick.svg" className="filter__svg" />
            <span className="filter__text">فیلترها</span>
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Filter;
