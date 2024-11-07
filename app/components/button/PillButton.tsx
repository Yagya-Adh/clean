interface IbuttonProps {
  text: string;
}

const PillButton = ({ text }: IbuttonProps) => {
  return (
    <button
      className=" 
      text-clean-black-10/60
      bg-white/20     
      text-base
      lg:text-xl
      text-center 
      uppercase 
      font-mono
      cursor-pointer
      rounded-full   
      overflow-hidden     
      px-10
      "
    >
      <div className="overflow-hidden group">
        <div className="translate-y-3 group-hover:-translate-y-16 ease-in-out transition-all duration-500">
          {text}
        </div>
        <div className="translate-y-11 rounded-t-full bg-clean-green-10 group-hover:-translate-y-4 ease-in-out transition-all duration-500">
          {text}
        </div>
      </div>
    </button>
  );
};

export default PillButton;
