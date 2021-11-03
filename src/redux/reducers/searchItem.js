import DATA from "../../Data";

const search = []

export const searchReducer= (state= search,{type,payload})=>{
    switch(type){
        case "SEARCH":
            const filteredCars = DATA.filter(car => car.model.toLowerCase().includes(payload.toLowerCase()) || car.manufacturer.toLowerCase().includes(payload.toLowerCase()) || car.year.toLowerCase().includes(payload.toLowerCase()) )


            return [
                ...state, ...filteredCars
            ]

        default:
            return state
    }
    
}