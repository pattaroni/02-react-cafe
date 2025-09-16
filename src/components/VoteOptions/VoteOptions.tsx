import clsx from "clsx";
import css from "./VoteOptions.module.css";
import type { VoteType } from "../../types/votes";

interface VoteOptionsProps {
  onVote: (type: VoteType) => void;
  onReset: () => void;
  canReset: boolean;
}

export default function VoteOptions({
  onVote,
  onReset,
  canReset = true,
}: VoteOptionsProps) {
  return (
    <>
      <div className={css.container}>
        <button className={css.button} onClick={() => onVote("good")}>
          Good
        </button>
        <button className={css.button} onClick={() => onVote("neutral")}>
          Neutral
        </button>
        <button className={css.button} onClick={() => onVote("bad")}>
          Bad
        </button>
        <button
          className={clsx(css.button, canReset ? css.reset : css.resetDisable)}
          onClick={onReset}
        >
          Reset
        </button>
      </div>
    </>
  );
}
