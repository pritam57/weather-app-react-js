import { GET_COUNTRY_NAME, PRODUCT_LIST } from "./constant";


export const productList = (country: string) => {

    return {
        type: PRODUCT_LIST,
        country: country,

    }
}

export const getcountryname = (country: string) => {

    return {
        type: GET_COUNTRY_NAME,
        country: country,

    }
}

