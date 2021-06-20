/// <reference types="cypress" />

const element = {

    trendingSection: 'Trending',
    searchField: '[type="text"]',
    searchButtom: '[id="searchbar"]'
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
module.exports = {
    accessTrendingSection,
    accessGiphyPage,
    searchForAnGiphy
}
