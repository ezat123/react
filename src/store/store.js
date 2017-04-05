import {createStore,combineReducers} from "redux";
import logger from "redux-logger";
import {CounterReducer} from "./reducer/reducer.js"

var reducer = combineReducers({
    CounterReducer,
})




export var store = createStore(reducer);


