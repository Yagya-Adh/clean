import { Metadata } from "next";
import PrivacyPolicySection from "../components/section/PrivacyPolicySection";

export const metadata: Metadata = {
  title: "Privacy Policy - Cleaner",
  description: "Created by Jamstackers",
  openGraph: {
    title: "Privacy Policy - Cleaner",
    description: "Cleaning service template for your home, office, soon...",
    images: ["/assets/logo/cleanlog.png"],
  },
};
const PrivacyPolicy = () => {
  return (
    <main>
      <PrivacyPolicySection />
    </main>
  );
};

export default PrivacyPolicy;
