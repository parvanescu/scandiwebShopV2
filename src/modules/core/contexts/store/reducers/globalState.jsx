import {SET_CURRENCY, SET_ERROR, SET_LOADING} from "../actionTypes";

const initialState = {
    loading: false,
    error: null,
    currency: null
}

export default function globalState (state = initialState, action) {
    switch (action.type) {
        case SET_LOADING: {
            const {loading} = action.payload;
            return {
                ...state,
                loading: loading
            }
        }
        case SET_ERROR:{
            const {error} = action.payload;
            return{
                ...state,
                error: error
            }
        }
        case SET_CURRENCY:{
            const{currency} = action.payload;
            return{
                ...state,
                currency: currency
            }
        }
        default: return state;
    }
}