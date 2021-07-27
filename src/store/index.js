import { createStore } from "redux";

// import combReducers from "../reducers";
import rootReducer from "../reducers/rootReducer";

const store = createStore(rootReducer);

export default store;
