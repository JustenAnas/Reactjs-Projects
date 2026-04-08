import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="flex items-center justify-between max-w-7xl mx-auto px-16 py-10">
      <div className="w-1/2 space-y-8">
        <div className="space-y-2">
          <h1 className="text-8xl font-bold leading-none">YOUR FEET</h1>
          <h1 className="text-8xl font-bold leading-none">DESERVE</h1>
          <h1 className="text-8xl font-bold leading-none">THE BEST</h1>
        </div>

        <p className="text-gray-600 font-semibold max-w-md">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae modi
          laborum autem, nulla odit molestias exercitationem eum expedita.
        </p>

        <div className="flex gap-6">
          <Link to='/ShoesCont'>
            <button className="bg-red-600 text-white px-8 py-3 font-semibold hover:bg-red-700 transition">
              Shop Now
            </button>
          </Link>

          <Link to='/ShoesCont'>
            <button className="border border-black text-gray-600 px-8 py-3 font-semibold hover:bg-black hover:text-white transition">
              Category
            </button>
          </Link>
        </div>
      </div>

      <div className="w-1/2 relative flex justify-center">
        <img src="./hero-image.png" alt="Hero" className="w-115" />
      </div>
    </div>
  );
};

export default Hero;
