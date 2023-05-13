//Define all the applicateion level states and define actions to make the state changes


//export the initial state
export const initialState = {
    basket: [],
}

//Selector

const reducer = (state, action) => {
    switch(action.type) {
        case "ADD_TO_BASKET":
        return {
            ...state,
            basket: [...state.basket, action.item],
        }
    }
}

export default reducer;