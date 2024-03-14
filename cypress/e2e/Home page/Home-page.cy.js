/// <reference types="cypress" />

// Welcome to Cypress!
//
// This spec file contains a variety of sample tests
// for a todo list app that are designed to demonstrate
// the power of writing tests in Cypress.
//
// To learn more about how Cypress works and
// what makes it such an awesome testing tool,
// please read our getting started guide:
// https://on.cypress.io/introduction-to-cypress

describe('création compte', () => {

    var url = "https://magento.softwaretestingboard.com/";

    function conexion(login, password) {
        cy.get('#email').type(login);
        cy.get('.login-container > .block-customer-login > .block-content > #login-form > .fieldset > .password > .control > #pass').type(password);
        cy.get("#button-login").click();
    }

    beforeEach(() => {
        // Cypress starts out with a blank slate for each test
        // so we must tell it to visit our website with the `cy.visit()` command.
        // Since we want to visit the same URL at the start of all our tests,
        // we include it in our beforeEach function so that it runs before each test
        cy.visit(url);
    });


    it("Home page", () => {
        //Présence du logo et du titre du site "LUMA"
        cy.get('.logo > img').should('exist');

        //Cliquer sur le bouton de se loguer
        //cy.get('.panel > .header > .authorization-link > a').click();

        //Cliquer sur le bouton Create an Account pour creer compte
        //cy.get('.panel > .header > :nth-child(3) > a').click();

        // Sélectionner le menu principal ou l'élément de menu approprié
        cy.get('#ui-id-2').then(menu => {
            // Récupérer tous les éléments du menu
            const items = menu.find('li');

            // Afficher le texte de chaque élément du menu dans la console
            items.each((index, item) => {
                cy.log(item.textContent);
            });

            //Sélection par texte de l'élément 
            //cy.get('#ui-id-2').contains("What's New").click();

            //Sélection par index de l'élément :
            // Sélectionner l'élément de menu spécifique (par exemple, le deuxième élément)
            const choice = cy.get('#ui-id-2 li').eq(1); // Remplacez "1" par l'index de l'élément de menu que vous souhaitez sélectionner

            choice.click(); // Cliquer sur l'élément de menu pour le sélectionner

        });

        cy.get('.page-footer').should('be.visible'); // Vérifie que le footer est visible
        //cy.get('footer').contains('À propos de nous').should('be.visible');

        // Sélectionner le menu principal ou l'élément de menu approprié
        cy.get('.page-footer').then(menuu => {
            // Récupérer tous les éléments du menu
            const itemss = menuu.find('links');

            // Afficher le texte de chaque élément du menu dans la console
            itemss.each((index, item) => {
                cy.log(item.textContent);
            });


        });


        //cy.get('footer').contains('Contact').should('exist'); // Vérifie que le texte 'Contact' est présent dans le footer
        //cy.get('footer a[href="/contact"]').should('exist'); // Vérifie qu'il y a un lien vers '/contact' dans le footer
    });

})