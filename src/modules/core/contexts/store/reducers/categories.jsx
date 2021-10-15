import {SET_CATEGORIES} from "../actionTypes";

const initialState = {
    categories: []
}

export default function categories (state=initialState, action){
    switch (action.type){
        case SET_CATEGORIES:{
            const {categories} = action.payload;
            return {
                ...state,
                categories: categories
            }
        }
        default: return state;
    }
}