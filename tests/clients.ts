import {browser} from "nightwatch";
import {Client, clients} from "../src/composables/clients";

describe('Clients tests', () => {

    it('Will navigate to clients index from the home page', () => {
        browser.init();
        browser.waitForElementVisible('.menu-item:last-child')
            .element.findByText('clients/')
            .click();

        browser.assert.urlEquals(browser.baseUrl + 'clients');
    })

    it('lists the clients', () => {
        browser.navigateTo(browser.baseUrl + 'clients');

        clients.value.forEach((client: Client, index) => {
            browser.element.findAll('.menu-item').nth(index + 2)
                .getText().assert.contains(client.title);

        });
    })

    it('will open a reader interface for a client', () => {

        const client = clients.value[1];

        browser.element.findByText(client.title).click();
        browser.assert.urlEquals(browser.baseUrl + client.link);
    })

});
