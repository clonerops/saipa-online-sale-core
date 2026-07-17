import { ReactSVG } from "react-svg";

const Enamad = () => {
  return (
    <div className="enamad">
      <p className="enamad__text">
        سایپا به‌عنوان یکی از بزرگ‌ترین خودروسازان کشور، با تکیه بر تجربه چند
        دهه فعالیت صنعتی، تلاش می‌کند محصولات قابل‌اعتماد، خدمات گسترده و
        تجربه‌ای شفاف برای مشتریان فراهم کند. این مجموعه با توسعه فناوری‌های
        نوین، گسترش شبکه خدمات و توجه به نیازهای واقعی مردم، مسیر رشد و نوآوری
        را ادامه می‌دهد تا همراه مطمئنی برای خانواده‌های ایرانی باشد.
      </p>
      <ReactSVG src="/svg/enamad.svg" className="enamad__img" />
    </div>
  );
};

export default Enamad;
