module.exports = {
  postcss: function(impy, cssnext, autoprefixer) {
    return {
      defaults: [impy, cssnext],
      cleaner: [autoprefixer({
        browsers: ['last 2 version']
      })]
    };
  }
};
