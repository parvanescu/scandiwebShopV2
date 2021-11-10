import {
    ADD_ITEM,
    DELETE_ITEM,
    SET_CATEGORIES,
    SET_CURRENCY,
    SET_ERROR,
    SET_LOADING,
    UPDATE_ITEM_QUANTITY,
    UPDATE_OPTION_CHOICE
} from "./actionTypes";

export const setLoading = loading => ({
    type: SET_LOADING,
    payload: {
        loading
    }
});

export const setError = error => ({
    type: SET_ERROR,
    payload: {
        error
    }
})

export const setCurrency = currency => ({
    type: SET_CURRENCY,
    payload: {
        currency
    }
})

export const setCategories = categories => ({
    type: SET_CATEGORIES,
    payload: {
        categories
    }

})

export const addItemToCart = item => ({
    type: ADD_ITEM,
    payload: {
        item
    }
})

export const updateItemQuantity = (id,itemIndex,quantity) => ({
  type: UPDATE_ITEM_QUANTITY,
  payload: {
      id,
      itemIndex,
      quantity
  }
})

export const updateOptionChoice = (id,itemIndex,attrIdx,newOptionId) => ({
    type: UPDATE_OPTION_CHOICE,
    payload: {
        id,
        itemIndex,
        attrIdx,
        newOptionId
    }
})

export const deleteItem = (id) => ({
    type: DELETE_ITEM,
    payload: {
        id
    }
})