import {browser} from "nightwatch";

describe('About me', () => {
    it('Can be navigated to from the home page', () => {

        browser.init().windowSize('current', 1400, 1000);
        
        browser.waitForElementVisible('.menu-item:last-child')
            .element.findByText('about_me')
            .click();

        browser.waitForElementVisible('#about_me')
            .element.findByText('Profile name:');
    });

    it('Will accept navigation by arrow keys', () => {

        browser.sendKeys('body', Keys.ARROW_DOWN)
            .element.find('.desktop-menu .highlighted .link-label').getText().assert.contains('Core Skills');

    })

    it('Will switch panels using TAB', () => {
        browser.sendKeys('body', Keys.TAB)
            .element.find('.workspace').assert.hasClass('border-white');
    })

    it('Will navigate back to home using ESCAPE', () => {
        browser.sendKeys('body', Keys.ESCAPE)
            .assert.urlEquals(browser.baseUrl);
    })
})
