Cypress.Commands.add('fillMandatoryFieldsAndSubmit', function() {
  cy.get('#email').type('qa@test.com')
    cy.get('#password').type('123456')
    cy.get('.p-16 > .flex-col > .flex').click()
    cy.get('.fixed > .flex-col').should('be.visible').and('contain', 'Seu login está incorreto, quer continuar?')
    cy.get('button').contains('Continuar').click()
})