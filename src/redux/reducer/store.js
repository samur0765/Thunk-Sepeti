import { applyMiddleware, combineReducers, createStore } from "redux";
import restaurantReducer from "./restorantReducer";
import cartReducer from "./cartReducer";
import { thunk } from "redux-thunk";

const rootReducer = combineReducers({ restaurantReducer, cartReducer });

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
