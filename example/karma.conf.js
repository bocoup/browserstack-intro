// karma.conf.js
module.exports = function(config) {
  config.set({
    basePath: '',
    // config of your BrowserStack account
    browserStack: {
      username: process.env.BS_USERNAME,
      accessKey: process.env.BS_KEY
    },
    frameworks: ['mocha'],
    // define browsers
    customLaunchers: {
      bs_firefox_mac: {
        base: 'BrowserStack',
        browser: 'firefox',
        browser_version: '21.0',
        os: 'OS X',
        os_version: 'Mountain Lion'
      },
      bs_iphone5: {
        base: 'BrowserStack',
        device: 'iPhone 5',
        os: 'ios',
        os_version: '6.0'
      }
    },
    files: [
      'src/*.js',
      'test/unit/*.js'
    ],
    reporters: ['dots', 'BrowserStack'],
    browsers: ['bs_firefox_mac', 'bs_iphone5'],
    singleRun: true
  })
};