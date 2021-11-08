import globalState from "./globalState";
import categories from "./categories";
import {combineReducers} from "@reduxjs/toolkit";
import cart from "./cart";

export default combineReducers({categories,globalState,cart})