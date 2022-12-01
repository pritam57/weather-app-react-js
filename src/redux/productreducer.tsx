import { GET_COUNTRY_NAME, PRODUCT_LIST, SET_PRODUCT_LIST,  } from "./constant"


export const productData = (data = [], action:any) => {
    switch (action.type) {
            case SET_PRODUCT_LIST:
               // console.log("PRODUCT_LIST condition ", action.resp)
                
                return data=action.resp;
                case PRODUCT_LIST:
                  // console.log(action.country+"called productreducer");
                    return data;
        default:
            return data
    }
}

export const countrydata = (data ="", action:any) => {
    switch (action.type) {
            case GET_COUNTRY_NAME:
              
                return data=action.country;
                
        default:
            return data;
    }
}
