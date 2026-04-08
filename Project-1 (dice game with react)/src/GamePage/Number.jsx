import { useGame } from "../Context/GameContext";

const Number = () => {
  const { selectedNumber, setSelectedNumber } = useGame();
  const arrNumber = [1, 2, 3, 4, 5, 6];

  return (
    <div className="absolute top-8 right-10 flex gap-4">
      {arrNumber.map((value) => (
        <div
          key={value}
          onClick={() => setSelectedNumber(value)}
          className={`w-14 h-14 flex items-center justify-center border-2 font-bold text-xl cursor-pointer
            ${
              selectedNumber === value
                ? "bg-black text-white border-gray-600"
                : "bg-white text-black border-black"
            }`}
        >
          {value}
        </div>
      ))}
    </div>
  );
};

export default Number;
