import Home from "./Components/Home"

 const App = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 py-2 px-4">
      <div className="text-center mb-8">
        <h1 className="text-5xl font-bold text-gray-800 mb-2">AI Image Enhancer</h1>
        <p className="tex-lg text-gray-500">Upload your images here</p>
      </div>
      <Home/> 
      <div className="text-sm mt-6 text-gray-600">
        Upload your image and let ai enhance for you in seconds!!
      </div>
    </div>
  )
}

export default App