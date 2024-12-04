import { Metadata } from "next";
import TermsCondition from "../components/section/TermsCondition";

export const metadata: Metadata = {
  title: "Terms and Conditions - Cleaner",
  description: "Created by Jamstackers",
  openGraph: {
    title: "Terms and Conditions - Cleaner",
    description: "Cleaning service template for your home, office, soon...",
    images: ["/assets/logo/cleanlog.png"],
  },
};
const TermsAndCondition = () => {
  return (
    <main>
      <TermsCondition />
    </main>
  );
};

export default TermsAndCondition;
