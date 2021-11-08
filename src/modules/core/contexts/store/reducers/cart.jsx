import {ADD_ITEM, DELETE_ITEM, UPDATE_ITEM} from "../actionTypes";

const initialState = {
    items: []
}

export default function cart(state = initialState, action) {
    switch (action.type) {
        case ADD_ITEM: {
            const {item} = action.payload;
            let existingItem = state.items.find(existingItem => existingItem.id === item.id)

            if (existingItem)
                return {
                    ...state,
                    items: state.items.map(existingItem => existingItem.id === item.id ? ({
                        ...item,
                        quantity: item.quantity + 1
                    }) : item)
                }
            else
                return {
                    ...state,
                    items: [...state.items, {...item, quantity: 1}]
                }
        }
        case UPDATE_ITEM: {
            const {id, quantity} = action.payload;
            if(quantity === 0)
                return {
                    ...state,
                    items: state.items.filter(item=>item.id !== id)
                }
            return {
                ...state,
                items: state.items.map(item => item.id === id ? ({...item, quantity: quantity}) : item)
            }
        }
        case DELETE_ITEM: {
            const {id} = action.payload;
            return {
                ...state,
                items: state.items.filter(item => item.id !== id)
            }
        }
        default:
            return state;
    }
}