import assetIcons from "../Assets/icons/Icons";

const HalfCircle = ({ className }) => {
  return (
    <div
      className={`${className} `}
      style={{
        width: "25rem",
        height: "12.5rem",
        borderTopLeftRadius: "400px",
        borderTopRightRadius: "400px",
        border: "30px solid #55C5CE",
        borderBottom: "0",
        boxSizing: "border-box",
        position: "relative",
        transform: "rotate(90deg)",
      }}
    >
      <div className='flex  items-end  justify-center absolute md:-bottom-[9rem] lg:-bottom-[9rem] xl:-bottom-[9rem] 2xl:-bottom-[9rem]'>
        <img
          src={assetIcons.elipse}
          alt='Elips'
          width='80%'
          style={{ transform: "rotate(270deg)" }}
        />
      </div>
    </div>
  );
};
export default HalfCircle;
