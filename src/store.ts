import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { bookAdToBill } from "./actions/action";
import { applyMiddleware } from "redux";
import thunkMiddleware from 'redux-thunk';

import reducer from "./reducers/reducer";

const store = createStore(reducer,applyMiddleware(thunkMiddleware));

// const testThunk = (disp)=>{
//     setInterval(()=>disp(bookAdToBill(1)
//     ),1000)
// }

// store.dispatch(testThunk)

export default store;