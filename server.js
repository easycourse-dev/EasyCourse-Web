/** ********************** EasyCourse-Web Server Script ******************** **/
/** ************************************************************************ **/

/** ************************** Base Package Setup ************************** **/

const path = require('path');
const express = require('express');
const compression = require('compression');
const minify = require('express-minify');
const webpack = require('webpack');
const webpackMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const config = require('./webpack.config.js');
const app = express();

/** *************************** Environment Setup ************************** **/
if (isDeveloping) {
  const compiler = webpack(config);
  const middleware = webpackMiddleware(compiler, {
    publicPath: config.output.publicPath,
    contentBase: 'src',
    stats: {
      colors: true,
      hash: false,
      timings: true,
      chunks: false,
      chunkModules: false,
      modules: false
    }
  });

/** ****************************** Output Setup **************************** **/
  app.use(middleware);
  // Compress everything to speedup
  app.use(compression({threshold: 0}));
  // Minify and cache everything
  app.use(minify());
  app.use(webpackHotMiddleware(compiler));
  app.get('*', function response(req, res) {
    res.write(middleware.fileSystem.readFileSync(path.join(__dirname, 'dist/index.html')));
    res.end();
  });
} else {
  app.use(express.static(__dirname + '/dist'));
  app.get('*', function response(req, res) {
    res.sendFile(path.join(__dirname, 'dist/index.html'));
  });
}

/** **************************** Server Running **************************** **/
app.listen(process.env.PORT || 2333, 'localhost', function onStart(err) {
  if (err) {
    console.log(err);
  }
  console.info('==> 🌎 Listening on port %s. Open up http://localhost:%s/ in your browser.', process.env.PORT || 2333, process.env.PORT || 2333);
});
