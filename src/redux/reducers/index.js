import addItem from "./addItem";
import { combineReducers } from "redux";
import addItems from "./addItem";
import { searchReducer } from "./searchItem";

const rootReducers = combineReducers({
    addItem: addItems, search: searchReducer
})

export default rootReducers;