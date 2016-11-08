import { SHOW_DOWNLOAD_LINKS } from '../actions/types';

const initState = {
  showDownloadLink: false
}

const navbarLinks = (state = initState, action) => {
  switch (action.type) {
    case SHOW_DOWNLOAD_LINKS:
      return {
        ...state,
        showDownloadLink: !state.showDownloadLink
      }

    default:
      return {
        ...state,
        showDownloadLink: !state.showDownloadLink
      }
  }
}

export default navbarLinks;
