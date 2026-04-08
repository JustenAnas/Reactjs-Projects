
const ImageUpload = (props) => {

  const showImgHandler = (e)=>{
    const file = e.target.files[0];
    if(file){
      props.uploadImgHandler(file);
    }
    
  }


  return (
    <div className="bg-white shadow-lg rounded-2xl p-6 w-full max-w-2xl"> 
    <label htmlFor="inputFile" className="block w-full cursor-pointer border-2 border-dashed border-gray-300 rounded-lg p-5 text-center hover:border-blue-500 transition-all">
      <input onChange={showImgHandler} type="file" id="inputFile" className="hidden"/>
      <span className="text-lg font-medium text-gray-600">click or drag to upload your img</span>
    </label>
    </div>
  )
}

export default ImageUpload