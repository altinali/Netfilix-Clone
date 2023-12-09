import {createStore,combineReducers,applyMiddleware} from 'redux'
import { movieReducer } from './reducers/movieReducer'
import thunk from 'redux-thunk'

const rootRedecer = combineReducers({
    movieReducer,
})

export default createStore(rootRedecer,applyMiddleware(thunk))