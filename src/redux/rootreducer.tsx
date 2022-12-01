import { combineReducers } from "redux";
import {productData} from './productreducer';
import { countrydata } from "./productreducer";

export default combineReducers({

productData,
countrydata,

})