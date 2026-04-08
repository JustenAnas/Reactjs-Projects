import Number from "./Number";

const Container = ({
  shoeData,
  setCurrentPage,
  currentPage,
  selectedCategory,
}) => {
  const categories = ["Men", "Women", "Children", "Sports"];
  const subTitles = [
    "Running Shoes",
    "Casual Sneakers",
    "Leather Boots",
    "High Tops",
  ];
  const lorem = [
    "Built for everyday comfort",
    "Designed for all-day wear",
    "Premium comfort and grip",
    "Lightweight. Durable. Clean.",
    "Made for performance and style",
  ];

  return (
    <>
      <div className="flex flex-wrap justify-center gap-6 px-5 py-15 w-full overflow-x-hidden box-border">
        {shoeData.map((img, index) => (
          /* The Container: Glass Effect */
          <div
            key={img.id}
            className="flex flex-row bg-black/40 backdrop-blur-md border border-white/10 p-4 rounded-2xl w-full max-w-md gap-2 shadow-2xl"
          >
            
            <img
              src={img.src.medium}
              alt="shoe"
              className="w-40 h-40 object-cover object-center  rounded-full shadow-lg"
            />

            
            <div className="flex flex-col justify-between grow items-end">
               
              <div className="text-right">
                <h2 className="text-xl font-bold text-white">
                  {subTitles[index % subTitles.length]}
                </h2>
                <p className="text-sm text-gray-400">
                  {selectedCategory && selectedCategory !== "shoes"
                    ? selectedCategory
                    : categories[index % categories.length]}
                </p>
                <p className="mt-2 text-gray-300 italic text-sm">
                  {lorem[index % lorem.length]}
                </p>
              </div>

              {/* THE BUTTON: Red and on the Right */}
              <button className="bg-red-600 text-white px-6 py-2 rounded-full font-semibold hover:bg-red-700 transition-colors shadow-lg shadow-red-900/20">
                Rate: $120
              </button>
            </div>
          </div>
        ))}
        <Number setCurrentPage={setCurrentPage} currentPage={currentPage} />
      </div>
    </>
  );
};

export default Container;
