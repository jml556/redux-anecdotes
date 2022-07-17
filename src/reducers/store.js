
import { combineReducers, createStore } from "redux";

import reducers from "./anecdoteReducer";

const store = createStore(reducers)

export default store