import {ADD_TOAST_ITEM, DELETE_TOAST_ITEM} from "../actionTypes";

const initialState = {
    messages: []
}

export default function toast(state=initialState,action){
    switch (action.type){
        case ADD_TOAST_ITEM: {
            const {title,text,type,time} = action.payload
            return {
                ...state,
                messages: [...state.messages,action.payload]
            }
        }
        case DELETE_TOAST_ITEM: {
            const {index} = action.payload
            return {
                ...state,
                messages: state.messages.filter((message,messageIndex)=>messageIndex!==index)
            }
        }
        default: return state

    }

}