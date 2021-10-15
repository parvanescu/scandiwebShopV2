import globalState from "./globalState";
import categories from "./categories";
import {combineReducers} from "@reduxjs/toolkit";

export default combineReducers({categories,globalState})