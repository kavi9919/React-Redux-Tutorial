import { createStore } from "redux";
import reducer from "./reducers/number-reducer";

//create store
const store =createStore(reducer);

export default store;