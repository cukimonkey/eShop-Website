//Define all the applicateion level states and define actions to make the state changes


//export the initial state
export const initialState = {
    basket: [],
}

//Selector

export const getBasketTotal = (basket) => {
    return(basket?.reduce((amount, item) => item.price + amount, 0));
}

const reducer = (state, action) => {
    switch(action.type) {
        case "ADD_TO_BASKET":
        return {
            ...state,
            basket: [...state.basket, action.item],
        }; 
        default:
    return state;
    }
}

export default reducer;