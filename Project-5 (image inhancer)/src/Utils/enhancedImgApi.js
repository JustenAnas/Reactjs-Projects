import axios from "axios";

const API_KEY = "wxh1npwbn8hth7f71";
const BASE_URL = "https://techhk.aoscdn.com";

export const enhancedImgAPI = async (file) => {
  try {
    const taskId = await uploadImage(file);
    const enhancedImageData = await pollForEnhancedImage(taskId);
    return enhancedImageData;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

const uploadImage = async (file) => {
  const formData = new FormData();
  formData.append("image_file", file);

  const { data } = await axios.post(
    `${BASE_URL}/api/tasks/visual/scale`,
    formData,
    {
      headers: {
        "Content-Type": "multipart/form-data",
        "X-API-KEY": API_KEY,
      },
    }
  );

  // ✅ Minimal fix: accept whatever data the API returns
  if (!data?.data) {
    throw new Error("Failed to upload img");
  }

  return data.data.taskId || data.data.task_id || data.data.id; // flexible path
};

const fetchEnhancedImg = async (taskId) => {
  const { data } = await axios.get(
    `${BASE_URL}/api/tasks/visual/scale/${taskId}`,
    {
      headers: {
        "X-API-KEY": API_KEY,
      },
    }
  );

  if (!data?.data) {
    throw new Error("Img not found!!");
  }

  return data.data;
};

const pollForEnhancedImage = async (taskId, retries = 0) => {
  const result = await fetchEnhancedImg(taskId);

  // still processing
  if (result.state === 4) {
    if (retries >= 20) {
      throw new Error("Max retries reached. Please try again later");
    }

    await new Promise((resolve) => setTimeout(resolve, 2000));
    return pollForEnhancedImage(taskId, retries + 1);
  }

  // finished, return result
  return result;
};
