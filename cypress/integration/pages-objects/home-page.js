/// <reference types="cypress" />

let value;

const element = {

    trendingSection: 'Trending',
    searchField: '[type="text"]',
    searchButtom: '[id="searchbar"]',
    copyButton: 'Copy link',
    inputShort: '[spellcheck="false"]',
}

const accessTrendingSection = () => {
    cy.visit('/');
    cy.contains(element.trendingSection).click();
    cy.url().should('eq', Cypress.config().baseUrl + 'trending-gifs');
}

const accessGiphyPage = () => {
    cy.visit('/');
}

const searchForAnGiphy = (type) => {
    cy.get(element.searchField).should('be.visible');
    cy.get(element.searchField).type(type)
    cy.get(element.searchButtom).should('be.visible');
    cy.get(element.searchButtom).click({ force: true }); 
}

const copyShortLink = () => {
    cy.contains(element.copyButton).click();
    cy.get(element.inputShort).first().click();
    cy.get(element.inputShort).first().then(($input) => {
        value = $input.attr('value');
        cy.log(value);
    })
}

const accessShortLink = () => {
    cy.visit(value);
}

const validateShortLinkUrl = () => {
    cy.url().should('include', Cypress.config().baseUrl + 'gifs');
}

module.exports = {
    accessTrendingSection,
    accessGiphyPage,
    searchForAnGiphy,
    copyShortLink,
    accessShortLink,
    validateShortLinkUrl
}
