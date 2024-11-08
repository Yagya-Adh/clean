import CustomHeader from "../components/banner/CustomHeader";
import ImageGridGroup from "../components/section/ImageGridGroup";
import ProfessionalCleaning from "../components/section/ProfessionalCleaning";
import Testimonials from "../components/section/Testimonials";
import CardTimeLine from "../components/timeline/CardTimeLine";

const ServicesPage = () => {
  return (
    <main>
      <CustomHeader
        icon="/assets/icon/checked.svg"
        slug="Expert Cleaning"
        title="Services"
        describe="Quality & Expert Cleaning for individuals and companies."
        descriptionMaxwidth="max-w-sm"
        isdescribeCapital={true}
        fadeAnimation="animate-fadeInLeft"
        variant="without-button"
      />
      <CardTimeLine />
      <ProfessionalCleaning />
      <Testimonials />
      <ImageGridGroup />
    </main>
  );
};

export default ServicesPage;
