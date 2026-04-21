describe('Dashboard - Bancos de Dados', () => {
    beforeEach(() => {
        cy.visit('https://teste-colmeia-qa.colmeia-corp.com')
    })

    context('Quando o usuário está logado corretamente', () => {
        
        beforeEach(() => {
            cy.fillMandatoryFieldsAndSubmit() 
            cy.get('.p-2 > .flex').click()
            cy.contains('a', 'Bancos de dados').click()
        })

        it('Criação e exclusão de um novo banco de dados', () => {
            cy.contains('button', 'Criar').click()
            const dbName = 'Banco de Dados Teste'
            cy.get('input[placeholder="Nome do item"]')
                .should('be.visible')
                .type(dbName)

            cy.contains('button', 'Salvar').click()
            cy.contains(dbName).should('be.visible')
            
            cy.contains('tr', dbName).within(() => {
                cy.get('button[title="Apagar"]').click()
            })
            cy.contains(dbName).should('not.exist')
        })
        // TESTE PULADO: Foi identificado um bug onde os itens arquivados 
        // desaparecem do sistema e não são listados na tela de 'Itens arquivados'.
        // Quando o bug for corrigido, remover o .skip para reativar o teste.
        it.skip('Arquiva um banco de dados e verifica se ele aparece na seção de itens arquivados', () => {
            const dbName = 'Banco de Dados para Arquivar'
            

            cy.contains('button', 'Criar').click()
            cy.get('input[placeholder="Nome do item"]')
                .should('be.visible')
                .type(dbName)
            cy.contains('button', 'Salvar').click()
            cy.contains('tr', dbName).should('be.visible')
            cy.contains('tr', dbName).within(() => {
                cy.get('button[title="Arquivar"]').click()
            })
            cy.contains(dbName).should('not.exist')
            cy.get('button[data-variant="icon"]').first().click()
            cy.contains('tr', dbName).should('be.visible')
        })

        it('Cria múltiplos bancos de dados e testa o filtro em tempo real', () => {
            const dbName1 = 'Banco Alpha'
            const dbName2 = 'Banco Beta'

        
            cy.contains('button', 'Criar').click()
            cy.get('input[placeholder="Nome do item"]').should('be.visible').type(dbName1)
            cy.contains('button', 'Salvar').click()
            cy.contains('tr', dbName1).should('be.visible')

         
            cy.contains('button', 'Criar').click()
            cy.get('input[placeholder="Nome do item"]').should('be.visible').type(dbName2)
            cy.contains('button', 'Salvar').click()
            cy.contains('tr', dbName2).should('be.visible')

           
            cy.get('input[placeholder="Pesquisar"]')
                .should('be.visible')
                .type(dbName1)
            cy.contains('tr', dbName1).should('be.visible') 
            cy.contains('tr', dbName2).should('not.exist') 
        })
      it('Cria um banco de dados e valida o reset da tabela', () => {
            const dbName = 'Banco Temporário'

    
            cy.contains('button', 'Criar').click()
            cy.get('input[placeholder="Nome do item"]').should('be.visible').type(dbName)
            cy.contains('button', 'Salvar').click()
            cy.contains('tr', dbName).should('be.visible')

    
            cy.get('button[data-variant="icon"]').last().click()
            cy.contains('tr', dbName).should('not.exist')
            
            cy.contains('Nenhum banco de dados encontrado').should('be.visible')
        })
        
    })

    context('Quando ocorre um erro na criação', () => {
        
        beforeEach(() => {
            cy.fillMandatoryFieldsAndSubmit() 
            cy.get('.p-2 > .flex').click()
            cy.contains('a', 'Bancos de dados').click()
        })

        it('Tenta salvar um banco de dados sem preencher o nome', () => {
            cy.contains('button', 'Criar').click()
            cy.contains('button', 'Salvar').click()
            cy.contains('.text-red-500', 'O nome do item é obrigatório').should('be.visible')
        })
    })
})