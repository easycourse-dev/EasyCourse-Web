import { SHOW_DOWNLOAD_LINKS } from './types';

const initState = {
  showDownloadLink: false
}

const navbarLinks = (state = initState, action) => {
  switch (action.type) {
    case SHOW_DOWNLOAD_LINKS:
      console.log(!state.showDownloadLink);
      return {
        ...state,
        showDownloadLink: !state.showDownloadLink
      }
  }
  return state;
}

export default navbarLinksReducer;
