import { Link } from "react-router-dom"

const RightCntnt = () => {
  return (
     <div className="w-1/2 flex flex-col items-start gap-6">
          <h1 className="text-8xl font-bold leading-none tracking-tight">
            Dice Game
          </h1>
          <Link  to = '/Page'>
          <button className="px-8 py-3 text-lg font-semibold bg-black text-white rounded-lg hover:bg-gray-800 transition">
            Play Now
          </button>
          </Link>
        </div>
  )
}

export default RightCntnt