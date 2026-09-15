import { JSX } from "react";
import InfiniteButton from "./InfiniteButton";

type SelectorProps = {
  onSelect: (selected: JSX.Element) => void;
};

const Selector = ({ onSelect }: SelectorProps) => {
  return (
    <nav className="flex gap-4">
      <button
        className="border border-neutral-600 rounded-full w-10 h-10 cursor-pointer hover:border-neutral-100 transition-all"
        onClick={() => onSelect(<InfiniteButton />)}
      >
        1
      </button>
      <button
        className="border border-neutral-600 rounded-full w-10 h-10 cursor-pointer hover:border-neutral-100 transition-all"
        onClick={() => onSelect(<InfiniteButton />)}
      >
        2
      </button>
    </nav>
  );
};

export default Selector;
