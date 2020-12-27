import axios from "axios";
import * as ActionTypes from "./Types";
export const fetchMemeImages = (dispatch) => {
  dispatch({ type: ActionTypes.FETCH_IMAGES_REQUEST });
  axios
    .get("https://api.imgflip.com/get_memes")
    .then((data) => {
      return dispatch({
        type: ActionTypes.FETCH_IMAGES_SUCCESS,
        payload: data.data.data.memes,
      });
    })
    .catch((error) => {
      console.log(error);
      return dispatch({
        type: ActionTypes.FETCH_IMAGES_FAILURE,
        payload: error.message,
      });
    });
};

export const setMemeImage = (data) => {
  return { type: ActionTypes.SET_MEME_IMAGE, payload: data };
};

export const setTopText = (data) => {
  return { type: ActionTypes.SET_TOP_TEXT, payload: data };
};

export const setBottomText = (data) => {
  return { type: ActionTypes.SET_BOTTOM_TEXT, payload: data };
};
