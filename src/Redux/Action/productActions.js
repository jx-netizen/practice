import axios from 'axios';
import  * as actionType from "../Constants/productConstant"

export const getProduct =()=> async (dispatch) =>{
    try {
        const {data} = await axios.get('http://localhost:8800/product');
        dispatch({type:actionType.GET_PRODUCTS_SUCCESS,payload:data})
    }
     catch (error){
        console.log('errorwhile product api calling :', error.message);
        dispatch({type:actionType.GET_PRODUCTS_FAIL, payload:error.message});

     }
}
export const getProductDetail =(id)=> async (dispatch)=>{
    try{
        dispatch({type:actionType.GET_PRODUCTS_DETAILS_REQUEST});
        const {data} = await axios.get(`http://localhost:8800/product/${id}`);
        dispatch({type:actionType.GET_PRODUCTS_DETAILS_REQUEST_SUCCESS,payload:data})
    }
    catch(error) {
        dispatch({type:actionType.GET_PRODUCTS_DETAILS_REQUEST_FAIL,payload:error.message})
    }
}