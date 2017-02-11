import {
  TOGGLE_SETTINGS_SIDEBAR,
  UPDATE_SETTINGS_VIEW,
  GET_LANGUAGES_SUCCESS,
  GET_LANGUAGES_FAILURE
} from '../actions/types'

const initialState = {
  settingsSidebarOpen: false,
  viewName: 'language',
  languages: []
}

const settings = (state = initialState, action) => {
  const { type, payload } = action
  switch(type) {
    case TOGGLE_SETTINGS_SIDEBAR:
      return {
        ...state,
        settingsSidebarOpen: payload
      }
    case UPDATE_SETTINGS_VIEW:
      return {
        ...state,
        viewName: payload
      }
    case GET_LANGUAGES_SUCCESS:
      return {
        ...state,
        languages: [state.languages, ...payload]
      }
    case GET_LANGUAGES_FAILURE:
      return {
        ...state,
        error: 'Unable to fetch languages for user settings'
      }
    default:
      return state
  }
}

export default settings
