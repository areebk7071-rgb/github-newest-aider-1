import { motion } from "framer-motion";
import Seo from "../components/shared/Seo";
import pageSeo from "../config/pageSeo";

export default function EducationPage() {
  return (
    <>
      <Seo
        title={pageSeo.education.title}
        description={pageSeo.education.description}
        path="/education"
        includeFaqSchema
      />

      <section className="max-w-5xl mx-auto px-4 md:px-8 py-12">
        <motion.h1
          className="font-display text-4xl mb-6 text-[#1F4D36]"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Plant Guides & Education
        </motion.h1>

        <p className="font-body text-lg text-[#4F7D4F]">
          This section will host detailed plant guides, growing calendars,
          FAQs, and step‑by‑step tutorials for Karachi’s climate. Content is
          being prepared and will be published soon.
        </p>
      </section>
    </>
  );
}
