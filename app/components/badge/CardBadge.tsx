interface ICardBadge {
  text: string;
}
const CardBadge = ({ text }: ICardBadge) => {
  return (
    <div
      className="
      font-inter
      font-medium
      tracking-widest  
      rounded-full 
      bg-clean-smoke-white 
      text-black 
      text-center
      text-xs
      sm:text-sm
      md:text-lg
      lg:font-normal 
      lg:text-xl 
      uppercase
      px-2.5
      py-3
      md:px-4 
      md:py-2 
    "
    >
      {text}
    </div>
  );
};

export default CardBadge;
