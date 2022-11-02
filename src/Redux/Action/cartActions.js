import axios from 'axios';
import * as actionType from "../Constants/cartConstant";

export const addToCart =(id,quantity) => async(dispatch) =>{
    try{
       const {data} = await axios.get(`http://localhost:8800/product/${id}`);
        dispatch({type:actionType.ADD_TO_CART, payload:{...data, quantity}});
    }
    catch(error){
        console.log('error while cart api calling :', error.message);
        dispatch({type:actionType.ADD_TO_CART_ERROR, payload:error.message});

    }
}

export const removeFromcart = (id) =>(dispatch) =>{
    dispatch({type:actionType.REMOVE_FROM_CART,  payload:id});
}