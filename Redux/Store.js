// import { createStore } from "redux";
// import Reducer from "./Reducers/index";

// export default function configureStore(InitialState) {
//   const store = createStore(Reducer, InitialState);
//   return store;
// }

import { createStore } from "redux";
import Reducers from "./Reducers";

const Store=createStore(Reducers)
export default Store