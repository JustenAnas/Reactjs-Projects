import { useGame } from "../Context/GameContext";

const Score = () => {
  const { score } = useGame();

  return (
    <div className="absolute top-4 left-4 flex flex-col items-start gap-1 p-2 bg-white border-2 border-black rounded-md shadow-md">
      <span className="text-2xl font-bold">{score}</span>
      <span className="text-lg font-medium">Total Score</span>
    </div>
  );
};

export default Score;
