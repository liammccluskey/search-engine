import {combineReducers} from 'redux'

import {themeReducer} from './theme'
import {communicationReducer} from './communication'

export const rootReducer = combineReducers({
    theme: themeReducer,
    communication: communicationReducer,
})