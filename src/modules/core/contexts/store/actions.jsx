import {SET_CATEGORIES, SET_CURRENCY, SET_ERROR, SET_LOADING} from "./actionTypes";

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