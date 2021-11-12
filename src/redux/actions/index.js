export const addItem = (product) => {
    return {
        type : "ADDITEM",
        payload : product
    }
}

export const delItem = (product) => {
    return {
        type : "DELITEM",
        payload : product
    }
}

export const searchItem = (input) =>{
    return {
        type : "SEARCH",
        payload: input
    }
}

export const minusItem = (product) => {
    return {
        type: "MINUSITEM",
        payload: product
    }
}