import { useState } from "react";
import ImagePreview from "./ImagePreview";
import ImageUpload from "./ImageUpload";
import { enhancedImgAPI } from "../Utils/enhancedImgApi";

const Home = () => {
  const [uploadImage, setUploadImage] = useState(null);
  const [enhancedImage, setEnhancedImage] = useState(null);
  const [loading, setLoading] = useState(false);

  const uploadImgHandler = async (file) => {
    setUploadImage(URL.createObjectURL(file));
    setLoading(true);

    try {
      const enhancedURL = await enhancedImgAPI(file);
      setEnhancedImage(enhancedURL.image); // same as your original
    } catch (error) {
      alert("Something went wrong please try again later!!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <ImageUpload uploadImgHandler={uploadImgHandler} />
      <ImagePreview
        loading={loading}
        upload={uploadImage}
        enhanced={enhancedImage}
      />
    </>
  );
};

export default Home;
