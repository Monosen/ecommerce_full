import { configureStore } from "@reduxjs/toolkit";

import rootReducer from "./root.reducer";

const confExt =
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

const store = configureStore({ reducer: rootReducer, confExt });

export default store;
