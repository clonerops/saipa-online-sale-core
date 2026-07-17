interface IProps {
  image: string;
  title: string;
}
const FilterCard = ({ title, image }: IProps) => {
  return (
    <div className="filter-card-wrapper">
      <div className="filter-card">
        <div className="filter-card__border"></div>

        <img src={image} className="filter-card__img" />
        <span className="filter-card__title">{title}</span>
        <div className="filter-card__text">مشاهده</div>
      </div>
    </div>
  );
};

export default FilterCard;
