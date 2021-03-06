var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./webpack.config.dev');
var port = 3001;
var ip = '0.0.0.0';

new WebpackDevServer(webpack(config), {
  publicPath: config.output.publicPath,
  historyApiFallback: true,
  hot: true,
  stats: {
    colors: true
  },
}).listen(port, ip, function(err) {
  if (err) {
    return console.log(err);
  }

  console.log('Listening at ' + ip + ':' + port);
});
