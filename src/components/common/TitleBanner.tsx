import { motion } from "framer-motion";

export default function TitleBanner() {
  const title = "Stitched";

  return (
    <motion.h1
      className="text-2xl font-extrabold tracking-tight text-black"
      initial={{ opacity: 0, y: -5 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {title}
    </motion.h1>
  );
}
