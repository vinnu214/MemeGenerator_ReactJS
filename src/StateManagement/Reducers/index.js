import { combineReducers } from "redux";
import { MemeReducer } from "./MemeReducer";

const rootReducer = combineReducers({
  memes: MemeReducer,
});
export default rootReducer;
