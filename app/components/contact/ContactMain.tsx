import CustomHeader from "../banner/CustomHeader";
import FrequentlyAsk from "../faqs/FrequentlyAsk";
import ContactForm from "../form/ContactForm";

const ContactMain = () => {
  return (
    <main>
      <CustomHeader
        icon="/assets/logo/drop.svg"
        slug="GET IN TOUCH"
        title="Contact"
        describe="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        descriptionMaxwidth="max-w-72"
        variant="without-button"
      />
      <ContactForm />

      <CustomHeader
        icon="/assets/logo/faq.svg"
        slug="FAQS"
        title="Have Questions?"
        describe="We’re committed to making your experience as smooth and straightforward as possible."
        descriptionMaxwidth="max-w-lg"
        variant="without-button"
      />

      <FrequentlyAsk />
    </main>
  );
};

export default ContactMain;
