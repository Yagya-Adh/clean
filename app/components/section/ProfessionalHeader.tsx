import { EfficientIcon } from "@/app/icons";

const ProfessionalHeader = () => {
  return (
    <div className="flex flex-col text-center items-center md:text-start md:items-start">
      <p className="flex items-center font-inter font-normal">
        <EfficientIcon className="h-8 w-8" />
        <span className="ms-4">EFFICIENT</span>
      </p>
      <h2 className="font-inter font-light text-4xl md:text-5xl text-clean-black-10 py-4">
        Professional Cleaning <br /> For Every Occasion
      </h2>
      <p className="font-inter font-light text-xl  text-clean-black-10 max-w-xl">
        Whether you&apos;re maintaining a pristine workspace, or simply keeping
        your home in top shape, our services are designed to meet all your
        needs.
      </p>
    </div>
  );
};

export default ProfessionalHeader;
