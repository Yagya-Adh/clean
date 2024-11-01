interface ICardBadge {
  text: string;
}
const CardBadge = ({ text }: ICardBadge) => {
  return (
    <div className="rounded-full px-4 py-2 bg-clean-smoke-white text-xl text-black text-center uppercase">
      {text}
    </div>
  );
};

export default CardBadge;
