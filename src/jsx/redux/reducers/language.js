import {
  GET_LANGUAGES_SUCCESS,
  GET_LANGUAGES_FAILURE
} from '../actions/types'

let initialState = {
  languages: [],
  error: ''
}

function shapeLanguagesArray(languages) {
  let newLanguagesArray = []
  for (let language of languages) {
    let newLanguage = {
      label: language.name,
      value: language.code,
    }
    newLanguagesArray.push(newLanguage)
  }

  return newLanguagesArray
}

const language = (state = initialState, action) => {
  const { type, payload } = action
  switch(type) {
    case GET_LANGUAGES_SUCCESS:

      return {
        ...state,
        languages: shapeLanguagesArray(payload)
      }
    case GET_LANGUAGES_FAILURE:
      return {
        ...state,
        error: payload
      }
    default:
      return state
  }
}

export default language
