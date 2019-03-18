import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import root from '../reducers'

const initialState = {}
const middleware = [thunk]
const store = createStore(
    root,
    initialState,
    applyMiddleware(...middleware)
)

export default store