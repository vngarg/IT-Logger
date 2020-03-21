import { combineReducers } from 'redux'
import logReducer from './LogReducer'
import techReducer from './techReducer'

export default combineReducers({
    log: logReducer,
    tech: techReducer
})