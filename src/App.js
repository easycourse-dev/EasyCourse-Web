import React, { Component, PropTypes as PT } from 'react';
import Helmet from 'react-helmet';

export default class App extends Component {
  static propTypes = {
    children: PT.object
  }

  render() {
    return (
      <div>
        <Helmet
          title="EasyCourse"
          meta={[
            {name: 'author', content: 'EasyCourse'},
            {name: 'description', content: 'EasyCourse - connect students, boost learning efficiency'},
            {name: 'format-detection', content: 'telephone=no'},
            {name: 'apple-mobile-web-app-capable', content: 'yes'},
            {name: 'apple-mobile-web-app-status-bar-style', content: 'black'},
            {name: 'keywords', content: 'chat,education,student,easycourse,learn,college,university,purdue'},
            {name: 'og:title', content: 'EasyCourse'},
            {name: 'og:image', content: './img/Logo/LogoLarge.png'},
            {name: 'og:description', content: 'EasyCourse - connect students, boost learning efficiency'},
            {name: 'viewport', content: 'width=device-width, initial-scale=1'}
          ]}
          link={[
            {rel: 'apple-touch-icon', href: require('./img/Logo/favicon/apple-icon-57x57.png'), sizes: '57x57'},
            {rel: 'apple-touch-icon', href: require('./img/Logo/favicon/apple-icon-60x60.png'), sizes: '60x60'},
            {rel: 'apple-touch-icon', href: require('./img/Logo/favicon/apple-icon-72x72.png'), sizes: '72x72'},
            {rel: 'apple-touch-icon', href: require('./img/Logo/favicon/apple-icon-76x76.png'), sizes: '76x76'},
            {rel: 'apple-touch-icon', href: require('./img/Logo/favicon/apple-icon-114x114.png'), sizes: '114x114'},
            {rel: 'apple-touch-icon', href: require('./img/Logo/favicon/apple-icon-120x120.png'), sizes: '120x120'},
            {rel: 'apple-touch-icon', href: require('./img/Logo/favicon/apple-icon-144x144.png'), sizes: '144x144'},
            {rel: 'apple-touch-icon', href: require('./img/Logo/favicon/apple-icon-152x152.png'), sizes: '152x152'},
            {rel: 'apple-touch-icon', href: require('./img/Logo/favicon/apple-icon-180x180.png'), sizes: '180x180'},
            {rel: 'icon', href: require('./img/Logo/favicon/android-icon-192x192.png'), sizes: '192x192', type: 'image/png'},
            {rel: 'icon', href: require('./img/Logo/favicon/favicon-16x16.png'), sizes: '16x16', type: 'image/png'},
            {rel: 'icon', href: require('./img/Logo/favicon/favicon-32x32.png'), sizes: '32x32', type: 'image/png'},
            {rel: 'icon', href: require('./img/Logo/favicon/favicon-96x96.png'), sizes: '96x96', type: 'image/png'}
          ]}
        />
        {this.props.children}
      </div>
    );
  }
}
