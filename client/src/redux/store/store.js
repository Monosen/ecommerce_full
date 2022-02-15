import { createStore, combineReducers, compose } from "redux";

//Reducers
import { loginReducer } from "../reducers/login.reducer";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const reducers = combineReducers({
	session: loginReducer,
});

export const store = createStore(reducers, composeEnhancers());
