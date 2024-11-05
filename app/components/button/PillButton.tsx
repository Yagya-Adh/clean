interface IbuttonProps {
  text: string;
}

const PillButton = ({ text }: IbuttonProps) => {
  return (
    <button
      className="              
      bg-clean-green-10 
        px-16
        text-base
        lg:text-xl
        text-center 
        uppercase 
        font-mono
        cursor-pointer
    "
    >
      <div className="overflow-hidden group">
        <div
          className={`translate-y-3 transform group-hover:-translate-y-16 ease-in-out transition-all duration-500`}
        >
          {text}
        </div>
        <div
          className={`translate-y-11 transform  group-hover:-translate-y-4 ease-in-out transition-all duration-500`}
        >
          {text}
        </div>
      </div>
    </button>
  );
};

export default PillButton;
