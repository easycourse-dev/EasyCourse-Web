import { SHOW_DOWNLOAD_LINKS } from './types';

export function showDownloadLink() {
  return function (dispatch) {
    dispatch({
      type: SHOW_DOWNLOAD_LINKS
    });
  }
}
