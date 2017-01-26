import { SHOW_DOWNLOAD_LINKS } from './types';

const showDownloadLink = () => {
  return dispatch => {
    dispatch({ type: SHOW_DOWNLOAD_LINKS })
  }
}

module.exports = {
  showDownloadLink
}
