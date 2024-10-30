interface IbuttonProp {
  text: string;
}
const Button = ({ text }: IbuttonProp) => {
  return (
    <button
      type="button"
      className="bg-clean-green-10 text-black hover:bg-black hover:text-black py-2 px-3 text-center"
    >
      {text}
    </button>
  );
};

export default Button;
