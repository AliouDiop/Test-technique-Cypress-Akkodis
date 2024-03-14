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

    it.skip("Vérifier les informations liées au la robustesse du mot de passe", () => {
        //conexion("super.admin@yopmail.com", "P@sser123");
        cy.get('.panel > .header > :nth-child(3) > a').click();
    });

    it("Création du compte", () => {
        //Cliquer sur le bouton Create an Account
        cy.get('.panel > .header > :nth-child(3) > a').click();

        //Personal Information
        cy.get('#firstname').type("fgfhghff"); //first name
        cy.get('#lastname').type("yutiiyti"); //last named

        //Sign-in Information
        cy.get('#email_address').type("fgfhghff"); //email
        cy.get('#password').type("yutiiyti"); //password
        cy.get('#password-confirmation').type("yutiiyti"); //confirm password

        //cliquer bouton enregistrer
        cy.get('#form-validate > .actions-toolbar > div.primary > .action > span').click();


    });

})
