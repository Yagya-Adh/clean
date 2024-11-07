interface ICardBadge {
  text: string;
}
const CardBadge = ({ text }: ICardBadge) => {
  return (
    <div
      className="
  bg-clean-smoke-white 
  text-black 
    rounded-full 
    px-2 md:px-4 py-2 md:py-2 
    text-sm  
    md:text-xl 
    text-center
    uppercase
    "
    >
      {text}
    </div>
  );
};

export default CardBadge;
