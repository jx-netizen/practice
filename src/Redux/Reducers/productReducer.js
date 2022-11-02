import * as actionTypes from "../Constants/productConstant"

export const getProductReducer = (state = {products: []}, action) => {
    switch(action.type) {
        case actionTypes.GET_PRODUCTS_SUCCESS:
            return { products: action.payload }
        case actionTypes.GET_PRODUCTS_FAIL:
            return { error: action.payload }
        default:
            return state
    }
};

export const getProductDetailReducer = (state = { product: { } },action)=>{
    switch(action.type){
        case actionTypes.GET_PRODUCTS_DETAILS_REQUEST:
            return {loading:true}
        case actionTypes.GET_PRODUCTS_DETAILS_REQUEST_SUCCESS:
            return {loading: false,product:action.payload}
        case actionTypes.GET_PRODUCTS_DETAILS_REQUEST_FAIL:
            return {loading: false,product:action.payload}
        case actionTypes.GET_PRODUCTS_DETAILS_REQUEST_RESET:
            return {product: { }}  
        default :
        return state 
         }

};