import ProfessionalAccordion from "./ProfessionalAccordion";
import ProfessionalHeader from "./ProfessionalHeader";

const ProfesstionalImageGrid = () => {
  return (
    <div className="mx-auto max-w-screen-2xl px-4 lg:px-10 h-full">
      <div className="md:columns-2 py-10 h-full px-4">
        <ProfessionalHeader />
        <ProfessionalAccordion />
      </div>
    </div>
  );
};

export default ProfesstionalImageGrid;
