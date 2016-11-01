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
const isDeveloping = process.env.NODE_ENV !== 'production';
const port = isDeveloping ? 2333 : process.env.PORT;

/** ****************************** Output Setup **************************** **/
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
  app.use(middleware);
  // Compress everything to speedup
  app.use(compression({threshold: 0}));
  // Minify and cache everything
  app.use(minify());
  app.use(webpackHotMiddleware(compiler));
  app.get('*', function response(req, res) {
    res.sendFile(path.join(__dirname, '/dist'));
    app.use(express.static(__dirname + '/dist'));
    res.end();
  });
} else {
  // Compress everything to speedup
  app.use(compression({threshold: 0}));
  // Minify and cache everything
  app.use(minify());

  const indexPath = path.join(__dirname, 'index.html');
  const publicPath = express.static(path.join(__dirname, 'dist'));

  app.use('/dist', publicPath);
  app.get('/', function response(req, res) {
    res.sendFile(indexPath);
  });
}

/** **************************** Server Running **************************** **/
app.listen(port, '0.0.0.0', function onStart(err) {
  if (err) {
    console.log(err);
  }
  console.info('==> 🌎 Listening on port %s.', port);
});
