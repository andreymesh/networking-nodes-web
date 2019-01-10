import { createStore, combineReducers, applyMiddleware } from 'redux'
import { reducer as formReducer } from 'redux-form'
import rootReducer from "./rootReducer"
import thunk from "redux-thunk"

const reducer = combineReducers({
  rootReducer,
  form: formReducer
});

const store = createStore(reducer, applyMiddleware(thunk))
export default store