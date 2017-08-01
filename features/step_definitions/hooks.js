var { defineSupportCode } = require('cucumber');

defineSupportCode(function ({ Before, After }) {
  After(function () {
    return this.browser.quit();
  });
  Before(function () {
     this.browser.waitForAngularEnabled(false);        
    return this.browser.manage().window().maximize();
  });

  defineSupportCode(function ({ setDefaultTimeout }) {
    setDefaultTimeout(60 * 1000);
  });
});

