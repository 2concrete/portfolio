import { motion } from "motion/react";
import { ChangeEvent, useState } from "react";

const Motion3 = () => {
  const [list, setList] = useState<number[]>([]);
  const [amount, setAmount] = useState<string>("");

  const handleClick = () => {
    setList((prev) => [...prev, Number((prev.length / 10).toFixed(2))]);
    setAmount((prev) => (Number(prev) + 1).toString());
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setAmount(e.target.value);

    const number = Number(e.target.value);

    if (number !== 0) {
      setList((prev) => {
        const additions = Array.from({ length: number }, (_, index) =>
          Number(((prev.length + index) / 10).toFixed(2)),
        );

        return [...prev, ...additions];
      });
    }
  };

  return (
    <div className="flex flex-col items-start gap-5">
      <div className="flex gap-2">
        <motion.button
          whileHover={{ opacity: 0.7 }}
          className="hover:cursor-pointer"
          onClick={handleClick}
        >
          click
        </motion.button>
        <input
          type="number"
          placeholder="or enter a number"
          className="[appearance:textfield] opacity-70 outline-none [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
          onChange={handleChange}
          onKeyDown={(e) => {
            if (e.key === "Backspace") {
              setAmount("");
              setList([]);
            }
          }}
          value={amount}
        />
      </div>
      <div className="flex flex-wrap">
        {list.map((item) => (
          <motion.span
            initial={{ opacity: 0, width: 0, height: 0 }}
            animate={{
              opacity: 0.7,
              width: 20 + item,
              height: 20 + item,
              borderRadius: 100,
            }}
            transition={{ duration: 2 }}
            className="text-xs w-10 h-10 border flex items-center justify-center"
            key={item}
          ></motion.span>
        ))}
      </div>
    </div>
  );
};

export default Motion3;
