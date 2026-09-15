import { motion } from "motion/react";
import { useState } from "react";

const InfiniteButton = () => {
  const [buttonCount, setButtonCount] = useState<number>(1);
  return (
    <section className="flex gap-1 flex-wrap">
      {Array.from({ length: buttonCount }, (_, i) => (
        <motion.button
          layout
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          whileHover={{ opacity: 0.7 }}
          transition={{ ease: "easeInOut", duration: 0.5 }}
          className="cursor-pointer"
          key={i}
          onClick={() => setButtonCount(buttonCount * 1.2)}
        >
          click me
        </motion.button>
      ))}
    </section>
  );
};

export default InfiniteButton;
