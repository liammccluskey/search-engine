import * as ThemeActions from './actions'
import { addMessage } from '../communication'

export const updateThemeColor = themeColor => dispatch => {
    dispatch(ThemeActions.setThemeColor(themeColor))
    dispatch(addMessage('Changes saved.'))
}

export const updateTintColor = tintColor => dispatch => {
    dispatch(ThemeActions.setTintColor(tintColor))
    dispatch(addMessage('Changes saved.'))
}