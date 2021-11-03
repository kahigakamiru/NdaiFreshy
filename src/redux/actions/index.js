export const addItem = (product) => {
    return {
        type : "ADDITEM",
        payload : product
    }
}

export const delItem = (product) => {
    return {
        type : "DELTEM",
        payload : product
    }
}

export const searchItem = (input) =>{
    return {
        type : "SEARCH",
        payload: input
    }
}