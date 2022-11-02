import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from "redux-thunk";
import { composeWithDevTools} from "redux-devtools-extension";
import { getProductReducer } from './Reducers/productReducer';
import { getProductDetailReducer } from './Reducers/productReducer';
import {CartReducer} from "./Reducers/cartReducer";

const reducer = combineReducers({
    getProducts: getProductReducer,
    getProductDetail : getProductDetailReducer,
    Cart : CartReducer
})

const middleware = [thunk];
const store = createStore (
    reducer,
    composeWithDevTools(applyMiddleware(...middleware))
)

export default store;