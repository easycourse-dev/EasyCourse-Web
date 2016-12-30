import {
  GET_LANGUAGES_SUCCESS,
  GET_LANGUAGES_FAILURE,
  ADD_SELECTED_LANGUAGE,
  REMOVE_SELECTED_LANGUAGE,
} from '../actions/types'

const initialState = {
  selectedLanguages: [],
  availableLanguages: []
}

const languageReducer = (state = initialState, action) => {
  const { type, payload } = action
  switch(type) {
    case GET_LANGUAGES_SUCCESS:
      return {
        ...state,
        availableLanguages: payload
      }
    case GET_LANGUAGES_FAILURE:
      return {
        ...state,
        error: payload
      }
    case ADD_SELECTED_LANGUAGE:
      return {
        ...state,
        selectedLanguages: [...state.selectedLanguages, payload]
      }
    case REMOVE_SELECTED_LANGUAGE:
      return {
        ...state,
        selectedLanguages: state.selectedLanguages.filter(language => language !== payload)
      }
    default:
     break 
  }
  return state
}

export default languageReducer
