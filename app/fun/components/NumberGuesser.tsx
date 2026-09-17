import { motion } from "motion/react";
import { ChangeEvent, FormEventHandler, useState } from "react";

const NumberGuesser = () => {
  const [guess, setGuess] = useState<string | number>("");
  const [log, setLog] = useState<string[]>([]);
  const [stats, setStats] = useState<{ correct: number; incorrect: number }>({
    correct: 0,
    incorrect: 0,
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setGuess(e.target.value);
  };

  const handleSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    const value = Number(guess);
    if (Number.isInteger(value) && value > 0 && value <= 20) {
      const target = Math.floor(Math.random() * 21);
      const isCorrect = value === target;
      setLog((previousLog) => [
        ...previousLog,
        `${isCorrect ? "correct" : "incorrect"}, ${value}, ${target}`,
      ]);
      setGuess("");
      setStats((previousStats) => ({
        correct: previousStats.correct + (isCorrect ? 1 : 0),
        incorrect: previousStats.incorrect + (isCorrect ? 0 : 1),
      }));
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="flex gap-10"
    >
      <div>
        <form onSubmit={handleSubmit}>
          <input
            placeholder="guess number 1-20"
            className="outline-none"
            onChange={handleChange}
            value={guess}
          />
        </form>
        <div className="flex flex-col-reverse">
          {log.slice().map((record: string, index: number) => {
            return (
              <motion.p
                layout
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.25 }}
                key={index}
              >
                {record}
              </motion.p>
            );
          })}
        </div>
      </div>
      <div>
        <p>stats</p>
        <p>correct: {stats.correct}</p>
        <p>incorrect: {stats.incorrect}</p>
        {stats.correct + stats.incorrect > 0 && (
          <p>
            correct percent:{" "}
            {(
              (stats.correct / (stats.correct + stats.incorrect)) *
              100
            ).toFixed(1)}
            %
          </p>
        )}
      </div>
    </motion.div>
  );
};

export default NumberGuesser;
