import { motion } from "motion/react";
import { ChangeEvent, FormEventHandler, useState } from "react";

const NumberGuesser = () => {
  const [guess, setGuess] = useState<string>("");
  const [result, setResult] = useState<boolean | null>(null);
  const [number, setNumber] = useState<number>(Math.floor(Math.random() * 20));
  const [log, setLog] = useState<string[]>([]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setGuess(e.target.value);
  };

  const handleSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    const value = Number(guess);
    if (Number.isInteger(value) && value >= 0 && value <= 20) {
      setResult(checkGuess(guess));
      setGuess("");
    }
  };

  const checkGuess = (rawGuess: string) => {
    setNumber(Math.floor(Math.random() * 20));
    const guess = Number(rawGuess);
    setLog((previousLog) => [
      ...previousLog,
      `${result ? "correct" : "incorrect"}, ${guess}, ${number}`,
    ]);
    return guess === number ? true : false;
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <form onSubmit={handleSubmit}>
        <input
          placeholder="guess number 0-20"
          className="outline-none"
          onChange={handleChange}
          value={guess}
        />
      </form>
      {log.map((record: string, index: number) => {
        return <p key={index}>{record}</p>;
      })}
    </motion.div>
  );
};

export default NumberGuesser;
