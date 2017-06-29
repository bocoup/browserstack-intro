const webdriver = require('selenium-webdriver');
const assert = require('assert');
const fs = require('fs');

// Input capabilities
const capabilities = {
  'browserName' : 'chrome',
  'browserstack.user' : process.env.BS_USERNAME,
  'browserstack.key' : process.env.BS_KEY
};

let driver;

// Setup
before(function (done) {
  driver = new webdriver.Builder().
  usingServer('http://hub-cloud.browserstack.com/wd/hub').
  withCapabilities(capabilities).
  build();
  done();
});

// Teardown
after(function(done) {
  driver.quit().then(done);
});

// Ensure a clean start to every test
beforeEach(function(done) {
  driver.get('http://www.bc.edu').then(function() {
    done();
  });
});

// Tests
describe('Testing Social Links...', function() {
  it('Goes to BC twitter when twitter icon is clicked', function(done) {
    driver.findElement(webdriver.By.className('icon-twitter')).click();
    driver.getCurrentUrl().then(function(url) {
      assert.equal(url,'https://twitter.com/bostoncollege');
      done();
    });
  });

  it('Goes to BC instagram when instagram icon is clicked', function(done) {
    driver.findElement(webdriver.By.className('icon-instagram')).click();
    driver.getCurrentUrl().then(function(url) {
      assert.equal(url,'https://www.instagram.com/bostoncollege/');
      done();
    });
  })
});

describe('Mobile Experience', function() {
  it('Has a small screen view', function(done) {
    driver.manage().window().setSize(320, 568);
    driver.findElement(webdriver.By.className('icon-hamburger'));
    driver.takeScreenshot().then(function(data) {
      fs.writeFile(__dirname + '/screenshots/home-320x568.jpg', data.replace(/^data:image\/png;base64,/,''), 'base64', function(err) {
        if(err) throw err;
      });
    }).then(done)

  });
});

