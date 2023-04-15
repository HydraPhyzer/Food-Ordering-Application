import { combineReducers } from "redux";
import CartReducer from "./CartReducer";

let Reducers = combineReducers({
  CartReducer: CartReducer,
});

// let RootReducer = (State, Action) => {
//   return Reducers(State, Action);
// };

// export default RootReducer;
export default Reducers;
