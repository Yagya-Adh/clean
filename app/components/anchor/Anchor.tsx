interface IAnchor {
  text: string;
  link: string;
}
const Anchor = ({ text, link }: IAnchor) => {
  return (
    <a
      href={link}
      className="
      relative
      flex 
      items-center 
      justify-center 
      cursor-pointer 
      uppercase
      overflow-hidden
      backdrop-blur-lg 
      rounded-full 
      text-2xl
      font-inter
      font-light
      px-14 
      py-5 
      h-12
      w-45
      my-4
      md:my-10
      bg-clean-green-10               
      "
    >
      <div className="group relative z-20 text-center flex flex-col justify-center items-center">
        <p className="translate-y-4 transform group-hover:-translate-y-10 ease-in-out transition-all duration-500 text-clean-black-10 z-20">
          {text}
        </p>
        <p className="translate-y-10 transform group-hover:-translate-y-4 ease-in-out transition-all duration-500 text-clean-black-10 z-20">
          {text}
        </p>
        <div className="absolute bottom-0 -left-10 translate-y-52 transform group-hover:-translate-y-2 ease-in-out transition-all duration-500  bg-clean-green-10/60 opacity-60 w-full h-full rounded-t-full group-hover:rounded-full group-hover:bg-clean-green-10 scale-50 group-hover:scale-150 p-0 group-hover:p-96 z-10" />
      </div>
    </a>
  );
};

export default Anchor;
