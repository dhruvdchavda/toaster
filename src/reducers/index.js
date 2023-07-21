import { combineReducers } from "redux";
import changeMessage from "./toastReducer";

const rootReducer = combineReducers({ changeMessage });

export default rootReducer;
