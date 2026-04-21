describe('Dashboard', () => {

    beforeEach(() => {
        cy.visit('https://teste-colmeia-qa.colmeia-corp.com')
        cy.fillMandatoryFieldsAndSubmit()
    })

    it('Verifica se foi direcionado para a tela de dashboard', () => {
        cy.url().should('include', '/dashboard')
    })

    it('Valida os elementos do cabeçalho (Header) na tela de Dashboard', () => {

        cy.get('header').should('be.visible').within(() => {
            cy.get('img[alt="Colmeia"]').should('be.visible')
            cy.contains('span', 'Colmeia').should('be.visible')
            cy.contains('button', 'Candidato').should('be.visible')
        })
    })

    it('Clica no botão para expandir o menu lateral', () => {
        cy.get('.p-2 > .flex').click()
        cy.get('.w-full > .gap-4').should('be.visible')
    })

    it('Visualizar o banco de dados do menu lateral', () => {
        cy.get('.p-2 > .flex').click()
        cy.get('.w-full > .gap-4').should('be.visible')
        cy.contains('a', 'Bancos de dados').click()
        cy.url().should('include', '/campanha/bancos-de-dados')
    })
    it('Visualizar o ColmeIA Forms do menu lateral', () => {
        cy.get('.p-2 > .flex').click()
        cy.get('.w-full > .gap-4').should('be.visible')
        cy.contains('a', 'Colmeia Forms').click()
        cy.url().should('include', '/campanha/colmeia-forms')
    })
})