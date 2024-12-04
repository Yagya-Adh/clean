import ProfessionalAccordion from "./ProfessionalAccordion";
import ProfessionalHeader from "./ProfessionalHeader";

const ProfesstionalImageGrid = () => {
  return (
    <div className="mx-auto max-w-screen-xl px-4 h-full">
      <div className="md:columns-2 py-10 h-full">
        <ProfessionalHeader />
        <ProfessionalAccordion />
      </div>
    </div>
  );
};

export default ProfesstionalImageGrid;
