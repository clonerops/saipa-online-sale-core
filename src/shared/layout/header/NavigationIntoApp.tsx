import { ReactSVG } from "react-svg";
import { useComponentStore } from "../../../store/component.store";

const tabs = [
  {
    id: 0,
    icon: "/svg/car.svg",
    title: "منتخبین قرعه کشی",
  },
  {
    id: 1,
    icon: "/svg/car-1.svg",
    title: "واریز وجه قرعه کشی",
  },
  {
    id: 2,
    icon: "/svg/car-1.svg",
    title: "تکمیل ثبت نام وکالتی",
  },
];

const NavigationIntoApp = () => {
  const activeTab = useComponentStore((state) => state.activeTab);
  const actionActiveTab = useComponentStore((state) => state.actionActiveTab);

  return (
    // <nav className="navigation-into">
    //   <ul className="navigation-into__lists">
    //     <li className="navigation-into__list">
    //       <Link to={"#"} className="navigation-into__content-box">
    //         <ReactSVG src="/svg/car.svg" className="navigation-into__icon" />
    //         <div className="navigation-into__text">منتخبین قرعه کشی</div>
    //       </Link>
    //     </li>
    //     <li className="navigation-into__list">
    //       <Link to={"#"} className="navigation-into__content-box">
    //         <ReactSVG src="/svg/car-1.svg" className="navigation-into__icon" />
    //         <div className="navigation-into__text">واریز وجه قرعه کشی</div>
    //       </Link>
    //     </li>
    //     <li className="navigation-into__list">
    //       <Link to={"#"} className="navigation-into__content-box">
    //         <ReactSVG src="/svg/car-1.svg" className="navigation-into__icon" />
    //         <div className="navigation-into__text">تکمیل ثبت نام وکالتی</div>
    //       </Link>
    //     </li>
    //   </ul>
    // </nav>
    <>
      <nav className="navigation-into">
        <ul className="navigation-into__lists">
          {tabs.map((tab) => (
            <li
              key={tab.id}
              className={`navigation-into__list ${
                activeTab === tab.id ? "active" : ""
              }`}
            >
              <button
                className="navigation-into__content-box"
                onClick={() => actionActiveTab(tab.id)}
              >
                <ReactSVG src={tab.icon} className="navigation-into__icon" />
                <div className="navigation-into__text">{tab.title}</div>
              </button>
            </li>
          ))}
        </ul>
      </nav>

      <div className="navigation-into__body">
        {/* {activeTab === 0 && <div>محتوای منتخبین قرعه کشی</div>}
        {activeTab === 1 && <div>محتوای واریز وجه قرعه کشی</div>}
        {activeTab === 2 && <div>محتوای تکمیل ثبت نام وکالتی</div>} */}
      </div>
    </>
  );
};

export default NavigationIntoApp;
