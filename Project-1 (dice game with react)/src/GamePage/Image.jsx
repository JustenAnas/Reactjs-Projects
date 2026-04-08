import { useRef, useEffect } from "react";
import Btns from "./Btns";
import gsap from "gsap";
import { useGame } from "../Context/GameContext";

const Image = () => {
  const { diceNumber, rollDice } = useGame();
  const diceRef = useRef();

  useEffect(() => {
    gsap.fromTo(
      diceRef.current,
      { rotate: 0 },
      { rotate: 720, duration: 0.8, ease: "power2.inOut" }
    );
  }, [diceNumber]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-4">
      <div className="w-60 h-60 flex items-center justify-center">
        <img
          onClick={rollDice}
          ref={diceRef}
          src={`./dice_${diceNumber}.png`}
          className="cursor-pointer"
          alt="dice"
        />
      </div>

      <p className="text-lg font-medium tracking-wide">
        Click to roll the dice
      </p>

      <Btns />
    </div>
  );
};

export default Image;
