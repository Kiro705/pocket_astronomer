import { createStore, applyMiddleware, combineReducers } from 'redux';
import createLogger from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
import searchResults from './searchResults'

const reducer = combineReducers({
	searchResults
})

let store

if (process.env.NODE_ENV === 'development') {
	const middleware = applyMiddleware(thunkMiddleware, createLogger({collapsed: true}))
	store = createStore(reducer, middleware)
} else {
	const middleware = applyMiddleware(thunkMiddleware)
	store = createStore(reducer, middleware)
}

export default store
export * from './searchResults'
