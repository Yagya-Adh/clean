import { EfficientIcon } from "@/app/icons";

const ProfessionalHeader = () => {
  return (
    <div className="flex flex-col text-center items-center lg:text-start lg:items-start">
      <p className="flex items-center">
        <EfficientIcon className="h-8 w-8" />
        <span className="ms-4 text-lg font-medium tracking-widest">
          EFFICIENT
        </span>
      </p>
      <h2 className="font-inter md:font-light font-normal text-3xl lg:text-6xl text-clean-black-10 py-4">
        Professional Cleaning <br /> For Every Occasion
      </h2>
      <p className="font-inter font-light text-base md:text-xl text-clean-black-10 max-w-xl tracking-widest">
        Whether you&apos;re maintaining a pristine workspace, or simply keeping
        your home in top shape, our services are designed to meet all your
        needs.
      </p>
    </div>
  );
};

export default ProfessionalHeader;
