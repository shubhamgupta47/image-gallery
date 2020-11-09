import axios from "axios";
import { getCookie } from "../helpers/auth";
import { BASE_API_URL } from "../utils/constants";
import { getErrors } from "./errors";

export const beginAddPhoto = (photo) => {
  return async (dispatch) => {
    try {
      const formData = new FormData();
      formData.append("photo", photo);
      await axios.post(`${BASE_API_URL}/photos`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${getCookie("token")}`,
        },
      });
      dispatch(uploadPhotoSuccess());
    } catch (error) {
      error.response && dispatch(getErrors({ uploadError: error.response }));
    }
  };
};

export const startLoadPhotos = () => {
  return async (dispatch) => {
    try {
      const photos = await axios.get(`${BASE_API_URL}/photos`, {
        headers: {
          Authorization: `Bearer ${getCookie("token")}`,
        },
      });
      dispatch(loadPhotos(photos.data));
    } catch (error) {
      console.error(error);
      error.response && dispatch(getErrors({ fetchingError: error.response }));
    }
  };
};

export const loadPhotos = (photos) => ({
  type: "LOAD_PHOTOS",
  photos,
});

export const uploadPhotoSuccess = () => ({
  type: "UPLOAD_PHOTOS_SUCCESS",
});
