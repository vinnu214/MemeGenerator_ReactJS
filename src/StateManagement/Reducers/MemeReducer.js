import * as ActionTypes from "../Actions/Types";

const initState = {
  loading: false,
  topText: "",
  bottomText: "",
  randomImg: "",
  allMemeImgs: [],
  error: "",
};
export const MemeReducer = (state = initState, action) => {
  console.log(action, "In MEME Reducer");
  switch (action.type) {
    case ActionTypes.FETCH_IMAGES_REQUEST:
      return { ...state, loading: true };
    case ActionTypes.FETCH_IMAGES_SUCCESS:
      return { ...state, allMemeImgs: action.payload, loading: false };
    case ActionTypes.FETCH_IMAGES_FAILURE:
      return { ...state, error: action.payload, loading: false };
    case ActionTypes.SET_TOP_TEXT:
      return { ...state, topText: action.payload };
    case ActionTypes.SET_BOTTOM_TEXT:
      return { ...state, bottomText: action.payload };
    case ActionTypes.SET_MEME_IMAGE:
      return { ...state, randomImg: action.payload };

    default:
      return state;
  }
};
