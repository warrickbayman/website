import {browser} from "nightwatch";

describe('Home page tests', () => {

    it('Will show the home page menu', () => {
        browser.init();
        browser.waitForElementVisible('.menu-item:last-child')
            .element.findByText('stack.md').assert.visible();
    });

    it('Will accept arrow key navigation', () => {
        browser.waitForElementVisible('.menu-item:last-child');
        browser.sendKeys('body', Keys.ARROW_DOWN)
            .element.find('.search-result').getText().assert.contains('.gitignore');

        browser.sendKeys('body', Keys.ARROW_DOWN).sendKeys('body', Keys.ARROW_DOWN)
            .element.find('.search-result').getText().assert.contains('clients/');

        browser.sendKeys('body', Keys.ARROW_UP)
            .element.find('.search-result').getText().assert.contains('about_me');
    })

    it('will open a reader interface for README.md', () => {
        browser.navigateTo(browser.baseUrl);
        browser.element.findByText('README.md').click();

        browser.assert.urlEquals(browser.baseUrl + 'readme');
        browser.element.find('.reader-title').getText().assert.contains('README.md');
    })

    it('will open a reader interface for stack.md', () => {
        browser.navigateTo(browser.baseUrl);
        browser.element.findByText('stack.md').click();

        browser.assert.urlEquals(browser.baseUrl + 'stack');
        browser.element.find('.reader-title').getText().assert.contains('stack.md');
    })
})
