export const getCategoriesState = store => store.categories.categories;
export const getSelectedCategory = store => store.categories.categories.filter(category=>category.selected)[0];
export const getLoadingState = store => store.globalState.loading;
export const getErrorState = store => store.globalState.error;
export const getCurrencyState = store => store.globalState.currency;
export const getItemQuantityById = (store,id,itemIndex)=> store.cart.items.filter((item,index) => id === item.id && index===itemIndex)[0]?.quantity;
export const getCartItems = (store) => store.cart.items;
