import Loading from "./Loading";

const ImagePreview = (props) => {
  return (
    <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-4xl">
      
      {/* original img */}
      <div className="bg-white overflow-hidden shadow-lg rounded-xl">
        <h2 className="text-xl font-semibold text-center bg-gray-800 text-white py-2">
          Original Img
        </h2>

        {props.upload ? (
          <img
            src={props.upload}
            alt=""
            className="w-full h-80 object-cover"
          />
        ) : (
          <div className="flex items-center justify-center h-80 bg-gray-300">
            No img Selected
          </div>
        )}
      </div>

      {/* enhanced img */}
      <div className="bg-white overflow-hidden shadow-lg rounded-xl">
        <h2 className="text-xl font-semibold text-center bg-blue-800 text-white py-2">
          Enhanced Img
        </h2>

        {props.loading ? (
          <div className="flex items-center justify-center h-80 bg-gray-200">
            <Loading />
          </div>
        ) : props.enhanced ? (
          <img
            src={props.enhanced}
            alt=""
            className="w-full h-80 object-cover"
          />
        ) : (
          <div className="flex items-center justify-center h-80 bg-gray-300">
            No enhanced image
          </div>
        )}
      </div>
    </div>
  );
};

export default ImagePreview;
