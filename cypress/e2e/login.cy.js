describe('Login com sucesso', () => {
  beforeEach(() => {
    cy.visit('https://teste-colmeia-qa.colmeia-corp.com')
  })

  it('verifica o título da aplicação', () => {
    cy.title().should('eq', 'QA teste prático')
  })
  it('realiza login com sucesso', () => {
    cy.get('#email').type('qa@test.com')
    cy.get('#password').type('123456')
    cy.get('.p-16 > .flex-col > .flex').click()
    cy.get('.fixed > .flex-col').should('be.visible').and('contain', 'Seu login está incorreto, quer continuar?')
    cy.get('button').contains('Continuar').click()
    cy.url().should('include', '/dashboard')

  })
 it('Tenta realizar um login com email ou senha incorretos', () => {
    cy.get('#email').type('tutuzinho@gmail.com')
    cy.get('#password').type('123456')
    cy.get('.p-16 > .flex-col > .flex').click()
    cy.contains('span.text-red-500', 'Usuário ou senha inválidos').should('be.visible')
  })
  
})

