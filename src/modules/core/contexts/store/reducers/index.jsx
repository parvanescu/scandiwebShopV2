import globalState from "./globalState";
import categories from "./categories";
import {combineReducers} from "@reduxjs/toolkit";
import cart from "./cart";
import toast from "./toast";

export default combineReducers({categories,globalState,cart,toast})