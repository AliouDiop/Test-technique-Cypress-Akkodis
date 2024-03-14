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

describe('Catalogue + tunel achat', () => {

    var url = "https://magento.softwaretestingboard.com/";

    function login(login, password) {
        cy.get('#email').type(login);
        cy.get('.login-container > .block-customer-login > .block-content > #login-form > .fieldset > .password > .control > #pass').type(password);
        cy.get('.login-container > .block-customer-login > .block-content > #login-form > .fieldset > .actions-toolbar > div.primary > #send2').click();
    }

    function passercommande() {
        //Cliquer sur licone panier 
        cy.wait(5000);
        cy.get('.showcart').click();

        //Proceder au paiement
        cy.get('#top-cart-btn-checkout').click();
    }

    function paiement() {
        cy.wait(5000);
        cy.get('#customer-email-fieldset > .required > .control > #customer-email').type("fgfhghff@gmail.com");

        //cy.get('#WLSO9IB').type("fgfhghff");
        //les elements selectionnes changent dun moment a lautre ce qui fait qui est difficile de definir des champs
    }

    function logout() {

    }

    beforeEach(() => {
        // Cypress starts out with a blank slate for each test
        // so we must tell it to visit our website with the `cy.visit()` command.
        // Since we want to visit the same URL at the start of all our tests,
        // we include it in our beforeEach function so that it runs before each test
        cy.visit(url);
    });


    it("Ajouter un article au panier et passer commande", () => {

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

            //Selection du produit a ajouter
            cy.get(':nth-child(2) > .product-item-info').click();

            //Selection details produits
            //Selectionner size
            cy.get('#option-label-size-143-item-167').click();

            //Selectionner couleur 
            cy.get('#option-label-color-93-item-59').click();

            //Definir la quantite
            cy.get('#qty').type(3);

            //Click sur le bouton add card
            cy.get('#product-addtocart-button').click();

            passercommande();
            
            paiement();

        



        });

    });

})