import { useState } from "react";
import { useGame } from "../Context/GameContext";
import "remixicon/fonts/remixicon.css";

const Btns = () => {
  const [rules, setRules] = useState(false);
  const { setScore } = useGame();

  return (
    <div className="flex flex-col items-center gap-4">
      <button
        onClick={() => setScore(0)}
        className="px-6 py-2 border-2 border-black bg-white text-black font-semibold rounded-md"
      >
        Reset Score
      </button>

      <button
        onClick={() => setRules(!rules)}
        className="px-6 py-2 bg-black text-white font-semibold rounded-md"
      >
        View Rules
      </button>

      {rules && (
        <div className="bg-amber-100 p-4 relative bottom-2 right-1">
          <div className="flex items-center justify-between mb-2">
            <h1 className="text-lg font-bold">How To Play Dice Game</h1>
            <i
              onClick={() => setRules(false)}
              className="ri-close-line font-black text-2xl cursor-pointer"
            ></i>
          </div>
          <p className="font-semibold">Select Any number</p>
          <p className="font-semibold">Click on Dice img</p>
          <p className="font-semibold">
            If selected number matches dice, score increases
          </p>
          <p className="font-semibold">
            If wrong guess, score decreases
          </p>
        </div>
      )}
    </div>
  );
};

export default Btns;
