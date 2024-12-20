interface IcardTag {
  cleanCycle: string;
  cleanType: string;
}

const CardTag = ({ cleanCycle, cleanType }: IcardTag) => {
  return (
    <div className="flex flex-col justify-center items-center text-center font-inter z-10 rounded-4xl shadow backdrop:blur-md  bg-transparent backdrop-blur-lg p-8 lg:p-10">
      <h3 className="font-inter font-light text-5xl text-clean-black-10 xl:text-6xl 2xl:text-8xl">
        {cleanCycle}
      </h3>
      <h3 className="font-inter font-light text-xl text-clean-black-10 capitalize xl:text-3xl">
        {cleanType}
      </h3>
    </div>
  );
};

export default CardTag;
