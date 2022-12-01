import axios from 'axios';
import { takeEvery, put, call } from 'redux-saga/effects'
import { PRODUCT_LIST, SET_PRODUCT_LIST} from './constant';

//api key = 1dd52908732a904367feb920f8fb49e7

function* getProducts(action: any): any {
    console.log(action.country + "from saga");
    let data = action.country
   // let p = data.toUpperCase();
    let countryname: any = data;
    


    try {
        const url = `https://restcountries.com/v3.1/name/${countryname}`;
        const resp = yield call(() => axios.get(url))
        // console.log(resp)
        yield put({ type: SET_PRODUCT_LIST, resp });
       
     

    }
    catch (error) {
        console.log(error);
        alert("please enter correct country name");
       

    }
}


function* productsaga() {

    yield takeEvery(PRODUCT_LIST, getProducts)
}

export default productsaga;
