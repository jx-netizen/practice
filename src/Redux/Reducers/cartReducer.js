import * as actionTypes from "../Constants/cartConstant";

export const CartReducer = (state = { cartItems: [] }, action) => {
    switch (action.type) {
        case actionTypes.ADD_TO_CART:
            const item = action.payload;
            const existItem = state.cartItems.find(
                (product) => product.id === item.product.id
            );

            if (existItem) {
                return {
                    ...state,
                    cartItems: state.cartItems.map((x) =>
                        x.product === existItem.product ? item : x
                    ),
                };
            } else {
                return { ...state, cartItems: [...state.cartItems, item] };
            }

        case actionTypes.REMOVE_FROM_CART:
            return {
                ...state,
                cartItems: state.cartItems.filter(
                    (product) => product.product.id !== action.payload
                ),
            };
        default:
            return state;
    }
};
