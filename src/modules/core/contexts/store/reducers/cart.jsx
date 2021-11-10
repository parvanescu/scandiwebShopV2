import {ADD_ITEM, DELETE_ITEM, UPDATE_ITEM_QUANTITY, UPDATE_OPTION_CHOICE} from "../actionTypes";

const initialState = {
    items: []
}

export default function cart(state = initialState, action) {
    switch (action.type) {
        case ADD_ITEM: {
            const {item} = action.payload;
            let existingItemFlag = state.items.find(existingItemIterated => existingItemIterated.id === item.id)
            if (existingItemFlag) {
                let itemsListWithSameId = []
                state.items.forEach((iteratedItem, itemIndex) => {
                    if (item.id === iteratedItem.id) {
                        itemsListWithSameId.push({itemIndex, ...iteratedItem});
                    }
                })
                if (itemsListWithSameId.length >= 1) {
                    let itemWithSameOptionIndex = -1;
                    itemsListWithSameId.forEach(sameIdItem => {
                        let sameAttr = true
                        for (let i = 0; i < sameIdItem.attributes.length; i++)
                            for (let j = 0; j < sameIdItem.attributes[i].items.length; j++)
                                if (sameIdItem.attributes[i].items[j].selected !== item.attributes[i].items[j].selected)
                                    sameAttr = false
                        if (sameAttr)
                            itemWithSameOptionIndex = sameIdItem.itemIndex;
                    })
                    if (itemWithSameOptionIndex !== -1) {
                        return {
                            ...state,
                            items: state.items.map((existingItem, itemIndex) =>
                                existingItem.id === item.id && itemWithSameOptionIndex === itemIndex ?
                                    ({
                                        ...existingItem,
                                        quantity: existingItem.quantity + 1
                                    }) : existingItem
                            )
                        }
                    } else {
                        return {
                            ...state,
                            items: [...state.items, {...item, quantity: 1}]
                        }
                    }

                } else
                    return {
                        ...state,
                        items: state.items.map(existingItem => existingItem.id === item.id ? ({
                            ...item,
                            quantity: item.quantity + 1
                        }) : item)
                    }
            } else {
                return {
                    ...state,
                    items: [...state.items, {...item, quantity: 1}]
                }
            }

        }
        case
        UPDATE_ITEM_QUANTITY: {
            const {id, itemIndex, quantity} = action.payload;
            if (quantity === 0)
                return {
                    ...state,
                    items: state.items.filter(item => item.id !== id)
                }
            return {
                ...state,
                items: state.items.map((item, index) => item.id === id && itemIndex === index ? ({
                    ...item,
                    quantity: quantity
                }) : item)
            }
        }
        case
        UPDATE_OPTION_CHOICE: {
            const {id, itemIndex, attrIdx, newOptionId} = action.payload;
            return {
                ...state,
                items: state.items.map((product, itemIdx) => product.id === id && itemIdx === itemIndex ? ({
                    ...product,
                    attributes: product.attributes.map((attribute, attributeIdx) =>
                        attrIdx === attributeIdx
                            ? ({
                                ...attribute,
                                items: attribute.items.map(item => item.id === newOptionId ? ({
                                    ...item,
                                    selected: true
                                }) : ({...item, selected: false}))
                            })
                            : attribute
                    )
                }) : product)
            }
        }
        case
        DELETE_ITEM: {
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