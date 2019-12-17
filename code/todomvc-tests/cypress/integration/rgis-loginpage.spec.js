/// <reference types="cypress" />


    it('should ago to main page', () => {    
        cy.visit('http://ngen-bo-dev.feelit.iasi.net/login')
        cy.get('#inputUsername').type('test.test')
        cy.get('#inputPassword').type('Parola123+{enter}')

        cy.get(':nth-child(5) > .nav-button').click()

        cy.get('.level-title').click()

        cy.get('.level-drop > .ReactTable > .rt-table > .rt-tbody > :nth-child(1) > .rt-tr > [style="flex: 100 0 auto; width: 100px;"]').click()

        cy.get(':nth-child(1) > .action-button > .button-img').click()

        cy.get('.save-button').click()

        cy.get('.ok-button').click()

    })