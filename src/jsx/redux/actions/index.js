import courses from './courses'
import navbarLinks from './navbarLinks'
import universities from './universities'
import user from './user'
import messages from './messages'
import settings from './settings'

module.exports = {
  ...courses,
  ...navbarLinks,
  ...universities,
  ...user,
  ...messages,
  ...settings
}
