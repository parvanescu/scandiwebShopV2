export const getCategoriesState = store => store.categories.categories;
export const getSelectedCategory = store => store.categories.categories.filter(category=>category.selected)[0];
export const getLoadingState = store => store.globalState.loading;
export const getErrorState = store => store.globalState.error;
export const getCurrencyState = store => store.globalState.currency;