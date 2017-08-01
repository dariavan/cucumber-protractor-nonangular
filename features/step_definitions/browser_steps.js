var seleniumWebdriver = require('selenium-webdriver');
var { defineSupportCode } = require('cucumber');
var assert = require('assert');
var protractor = require('protractor');
var by = new protractor.ProtractorBy();
var EC = new protractor.ProtractorExpectedConditions();

defineSupportCode(function ({ Given, When, Then }) {
    Given('I am on the Onliner.by catalog page', function () {
        return this.browser.get('https://catalog.onliner.by');
    });

    When('I click on mobile phones link', function () {
        let phonesCatalogButton = by.linkText('Мобильные телефоны');
        let condition = this.browser.element(phonesCatalogButton);
        return this.browser.wait(EC.presenceOf(condition), 5000)
            .then(() => {
                return this.browser.element(phonesCatalogButton).click();
            });
    });

    Then('I click on the checkbox-filter with {stringInDoubleQuotes} name', function (text) {
        let checkBoxByName = by.cssContainingText(".schema-filter__checkbox-item", text);
        return this.browser.wait(EC.presenceOf(this.browser.element.all(checkBoxByName).first(), 8000))
            .then((el) => {
                return this.browser.element.all(checkBoxByName).first().click();
            })
    });
    Then('click on another checkbox-filter with {stringInDoubleQuotes} name', function (text) {
        let checkBoxByName = by.cssContainingText(".schema-filter__checkbox-item", text);
        return this.browser.wait(EC.presenceOf(this.browser.element.all(checkBoxByName).first(), 8000))
            .then((el) => {
                return this.browser.element.all(checkBoxByName).first().click();
            })
    });

    Then('I click on first item with name {stringInDoubleQuotes}', function (phoneName) {
        return this.browser.sleep(2000)
            .then(() => {
                var el = by.cssContainingText('.schema-product__title>a>span', phoneName);
                this.browser.wait(EC.presenceOf(this.browser.element(el)), 5000);
            }).then(() => {
                this.browser.executeScript("arguments[0].scrollIntoView(false);", this.browser.element.all(el).first().getWebElement());
                return this.browser.element.all(el).first().click();
            })
    });

    Then('I add to comparator', function () {
        let addToComparison = by.className("catalog-masthead-controls__input i-checkbox i-checkbox_yellow");
        return this.browser.element(addToComparison).click();
    });

    Then('I navigate back', function () {
        return this.browser.navigate().back();
    });

    When('I click on second item with name {stringInDoubleQuotes}', function (phoneName) {
        let tagElement = by.css('.schema-tags__text');
        return this.browser.wait(EC.presenceOf(this.browser.element(tagElement)), 5000)
            .then(phone => {
                return this.browser.element.all(by.cssContainingText('.schema-product__title>a>span', phoneName)).first();
            }).then(phone => {
                this.browser.executeScript("arguments[0].scrollIntoView(false);", phone.getWebElement());
                return phone.click();
            })
    });

    Then('I add to comparator again', function () {
        let addToComparison = by.className("catalog-masthead-controls__input i-checkbox i-checkbox_yellow");
        return this.browser.findElement(addToComparison).click();
    });

    Then('redirect to comparison page', function () {
        let comparisonButton = by.className('compare-button__sub compare-button__sub_main');
        return this.browser.wait(EC.presenceOf(this.browser.element(comparisonButton)), 5000)
            .then((element) => {
                return this.browser.findElement(comparisonButton).click();
            });

    });

    Then('assert that first is better than second item', function () {
        let iphoneSE, iphone6s;
        return this.browser.element.all(by.css('.product-table__cell_accent:nth-child(3)')).count()
            .then(res => iphone6s = res)
            .then(() => {
                return this.browser.element.all(by.css('.product-table__cell_accent:nth-child(4)')).count();
            })
            .then(res => iphoneSE = res)
            .then(() => {
                if (iphoneSE > iphone6s) {
                    console.log("iphoneSE wins!");
                    assert(true);
                } else {
                    console.log('iphone6s wins!');
                    assert(false);
                }
            });
    });

    Then('delete all items from comparison', function () {
        let deleteComparison = by.className("product-table__clear button button_small button_gray");
        return this.browser.wait(EC.presenceOf(this.browser.element.all(deleteComparison).first()), 5000)
            .then(() => {
                return this.browser.element.all(deleteComparison).first().click()
            });
    });
});