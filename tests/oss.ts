import {browser} from "nightwatch";
import {oss} from "../src/composables/oss";
import {Project} from "../src/types";

describe('OSS tests', () => {

    it('Will navigate to OSS index from the home page', () => {
        browser.init();
        browser.waitForElementVisible('.menu-item:last-child')
            .element.findByText('oss/')
            .click();

        browser.assert.urlEquals(browser.baseUrl + 'oss');
    })

    it('lists the OSS projects', () => {
        browser.navigateTo(browser.baseUrl + 'oss');

        oss.value.forEach((project: Project, index) => {
            browser.element.findAll('.menu-item').nth(index + 2)
                .getText().assert.contains(project.title);

        });
    })

    it('will open a reader interface for a client', () => {

        const project = oss.value[1];

        browser.element.findByText(project.title).click();
        browser.assert.urlEquals(browser.baseUrl + 'oss/' + project.title);
    })

});
