import ProfessionalAccordion from "./ProfessionalAccordion";
import ProfessionalHeader from "./ProfessionalHeader";

const ProfesstionalImageGrid = () => {
  return (
    <div className="mx-auto max-w-screen-xl px-4 lg:px-10 h-full">
      <div className="relative  ">
        <ProfessionalHeader />
      </div>
      <ProfessionalAccordion />
    </div>
  );
};

export default ProfesstionalImageGrid;
