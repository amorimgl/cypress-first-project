/// <reference types="cypress" />

const element = {

    giphy: '.giphy-gif-img'
}

const openFirstGiphy = () => {
    cy.get(element.giphy)
        .first()
        .click({ force: true });
}

const checkGiphy = () => {
    cy.get('video', { timeout: 10000 }).should('be.visible');
}

module.exports = {
    openFirstGiphy,
    checkGiphy
}
