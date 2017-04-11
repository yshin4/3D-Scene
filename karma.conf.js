/* eslint indent: ["error", 2] */
module.exports = function (config) {
  config.set({
    frameworks: [
      "jasmine",
      "fixture"
    ],

    files: [
      "*.js",
      "test/**/*.js",
      "test/**/*.html"
    ],

    preprocessors: {
      "test//**/*.html": ["html2js"],
      "*.js": ["coverage"]
    },

    browsers: [
      "Chrome", "Firefox"
    ],

    reporters: [
      "dots",
      "coverage"
    ]
  });
};
