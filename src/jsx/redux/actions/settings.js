import axios from 'axios'
import {
  TOGGLE_SETTINGS_SIDEBAR,
  UPDATE_SETTINGS_VIEW,
  GET_LANGUAGES_SUCCESS,
  GET_LANGUAGES_FAILURE
} from './types'

const ROOT_URL = 'https://zengjintaotest.com/api'

const toggleSettingsSidebar = (value) => {
  return dispatch => {
    dispatch({
      type: TOGGLE_SETTINGS_SIDEBAR,
      payload: value
    })
  }
}

const updateSettingsView = (viewName) => {
  return dispatch => {
    dispatch({
      type: UPDATE_SETTINGS_VIEW,
      payload: viewName
    })
  }
}

const getLangauges = () => {
  return dispatch => {
    axios.get(`${ROOT_URL}/defaultlanguage`)
      .then(res => {
        dispatch({
          type: GET_LANGUAGES_SUCCESS,
          payload: res.data
        })
      })
      .catch(error => {
        dispatch({ type: GET_LANGUAGES_FAILURE })
      })
  }
}

module.exports = {
  toggleSettingsSidebar,
  updateSettingsView,
  getLangauges
}
