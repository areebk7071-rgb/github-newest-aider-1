import { motion } from "framer-motion";
import Seo from "../components/shared/Seo";

export default function GuidePage() {
  return (
    <>
      <Seo
        title="Beginner Gardening Guide"
        description="Step‑by‑step guide for new gardeners in Karachi"
        path="/guide"
        includeFaqSchema
      />

      <section className="max-w-4xl mx-auto px-4 md:px-8 py-12">
        <motion.h1
          className="font-display text-4xl mb-6 text-[#1F4D36]"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Beginner Gardening Guide
        </motion.h1>

        <p className="font-body text-lg text-[#4F7D4F]">
          This guide will walk you through selecting seeds, preparing soil,
          planting, and caring for your garden. Content will be added soon.
        </p>
      </section>
    </>
  );
}
