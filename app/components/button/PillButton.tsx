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
      hover:bg-clean-green-10
      "
    >
      <div className="overflow-hidden group">
        <div className="translate-y-3 2xl:translate-y-4 group-hover:-translate-y-16 2xl:text-3xl 2xl:px-6 ease-in-out transition-all duration-500 font-inter font-normal">
          {text}
        </div>
        <div className="translate-y-11 rounded-t-full group-hover:-translate-y-4 2xl:text-3xl 2xl:px-6 ease-in-out transition-all duration-500 font-inter font-normal">
          {text}
        </div>
      </div>
    </button>
  );
};

export default PillButton;
