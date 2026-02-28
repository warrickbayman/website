import {browser} from "nightwatch";
import {projects} from "../src/composables/projects";
import {Project} from "../src/types";

describe('Project tests', () => {

    it('Will navigate to Projects index from the home page', () => {
        browser.init();
        browser.waitForElementVisible('.menu-item:last-child')
            .element.findByText('projects/')
            .click();

        browser.assert.urlEquals(browser.baseUrl + 'projects');
    })

    it('lists the Projects', () => {
        browser.navigateTo(browser.baseUrl + 'projects');

        projects.value.forEach((project: Project, index) => {
            browser.element.findAll('.menu-item').nth(index + 2)
                .getText().assert.contains(project.title);

        });
    })

    it('will open a reader interface for a client', () => {

        const project = projects.value[1];

        browser.element.findByText(project.title).click();
        browser.assert.urlEquals(browser.baseUrl + project.link);
    })

});
