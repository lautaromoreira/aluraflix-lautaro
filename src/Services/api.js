import axios from "axios";

const api = axios.create({
  baseURL: "https://678be0ef1a6b89b27a2bbce0.mockapi.io/",
});

export const getVideos = async () => {
  try {
    const response = await api.get("/videos");
    return response.data;
  } catch (error) {
    console.error("Error al buscar videos", error);
    throw new Error("No se pudieron obtener los videos. Intente de nuevo.");
  }
};

export const saveVideo = async (video) => {
  try {
    const response = await api.post("/videos", video);
    return response.data;
  } catch (error) {
    console.error("Error al grabar video", error);
    throw error;
  }
};

export const deleteVideo = async (videoId) => {
  try {
    const response = await api.delete(`/videos/${videoId}`);
    return response.data;
  } catch (error) {
    console.error("Error al borrar vídeo", error);
    throw error;
  }
};

export const updateVideo = async (videoId, updatedVideo) => {
  try {
    const response = await api.put(`/videos/${videoId}`, updatedVideo);
    return response.data;
  } catch (error) {
    console.error("Error al modificar vídeo", error);
    throw error;
  }
};

export default api;
