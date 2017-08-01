require('chromedriver')
var seleniumWebdriver = require('selenium-webdriver');
var {defineSupportCode} = require('cucumber');
var protractor = require('protractor');
var plugins_1 = require('protractor/built/plugins.js');

function CustomWorld() {
  this.browser = new protractor.ProtractorBrowser(new seleniumWebdriver.Builder().forBrowser('chrome').build());
  this.browser.plugins_ = new plugins_1.Plugins({});
}

defineSupportCode(function({setWorldConstructor}) {
  setWorldConstructor(CustomWorld)
})

defineSupportCode(function({setDefaultTimeout}) {
  setDefaultTimeout(60*1000);
})