const Number = ({ setCurrentPage, currentPage }) => {
  return (
    <div className="fixed bottom-10 left-0 w-full flex justify-center items-center gap-4 z-50">
      {/* Back Arrow */}
      <button
        onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
        className="p-2 rounded-full bg-black/40 backdrop-blur-md border border-white/20 text-white hover:bg-red-600 transition-all"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="m15 18-6-6 6-6" />
        </svg>
      </button>

      {/* Numbers Container */}
      <div className="flex bg-black/40 backdrop-blur-md border border-white/20 p-1 rounded-full shadow-2xl font-semibold">
        <button
          onClick={() => setCurrentPage(1)}
         className={`px-5 py-2 rounded-full ${currentPage === 1 ? 'bg-red-600' : ''}`}
        >
          1
        </button>
        <button
          onClick={() => setCurrentPage(2)}
          className={`px-5 py-2 rounded-full ${currentPage === 2 ? 'bg-red-600' : ''}`}
        >
          2
        </button>
        <button
          onClick={() => setCurrentPage(3)}
         className={`px-5 py-2 rounded-full ${currentPage === 3 ? 'bg-red-600' : ''}`}
        >
          3
        </button>
      </div>

      {/* Next Arrow */}
      <button
        onClick={() => setCurrentPage((prev) => prev + 1)}
        className="p-2 rounded-full bg-black/40 backdrop-blur-md border border-white/20 text-white hover:bg-red-600 transition-all"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="m9 18 6-6-6-6" />
        </svg>
      </button>
    </div>
  );
};

export default Number;
