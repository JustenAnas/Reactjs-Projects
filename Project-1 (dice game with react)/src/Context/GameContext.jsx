import { createContext, useContext, useState } from "react";

const GameContext = createContext();

export const GameProvider = ({ children }) => {
  const [selectedNumber, setSelectedNumber] = useState(null);
  const [score, setScore] = useState(0);
  const [diceNumber, setDiceNumber] = useState(1);

  const rollDice = () => {
    if (selectedNumber === null) return;

    const random = Math.floor(Math.random() * 6) + 1;
    setDiceNumber(random);

    if (random === selectedNumber) {
      setScore(prev => prev + selectedNumber);
    } else {
      setScore(prev => prev - selectedNumber);
    }
  };

  return (
    <GameContext.Provider
      value={{
        selectedNumber,
        setSelectedNumber,
        score,
        diceNumber,
        rollDice,
        setScore,
      }}
    >
      {children}
    </GameContext.Provider>
  );
};

export const useGame = () => useContext(GameContext);
