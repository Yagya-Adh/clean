interface IbuttonProps {
  text: string;
}

const PillButton = ({ text }: IbuttonProps) => {
  return (
    <button
      className="
  px-10 
  text-base
  lg:text-xl
  text-center 
  uppercase 
  bg-clean-green-10 
  hover:bg-clean-green-10/80 
  font-mono
  cursor-pointer
  rounded-full
  "
    >
      <div className="overflow-hidden group ">
        <div
          className={`translate-y-3 transform group-hover:-translate-y-16 ease-in-out transition-all duration-500`}
        >
          {text}
        </div>
        <div
          className={`translate-y-11 transform group-hover:-translate-y-4 ease-in-out transition-all duration-500`}
        >
          {text}
        </div>
      </div>
    </button>
  );
};

export default PillButton;
