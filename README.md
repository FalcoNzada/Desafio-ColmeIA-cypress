# Desafio ColmeIA - Automação E2E com Cypress 🐝

Este repositório contém a automação de testes End-to-End (E2E) desenvolvida para o Desafio Técnico da ColmeIA. Os testes cobrem os fluxos principais de autenticação e a gestão de Bancos de Dados no Dashboard.

## 🛠️ Tecnologias Utilizadas

* **[Node.js](https://nodejs.org/):** Ambiente de execução.
* **[Cypress](https://www.cypress.io/):** Framework de testes E2E.
* **[Mochawesome](https://www.npmjs.com/package/cypress-mochawesome-reporter):** Gerador de relatórios HTML.

## ⚙️ Pré-requisitos e Instalação

Antes de começar, você precisará ter o [Node.js](https://nodejs.org/) instalado na sua máquina.

1. Clone este repositório:

   ```bash
   git clone [https://github.com/FalcoNzada/Desafio-ColmeIA-cypress.git](https://github.com/FalcoNzada/Desafio-ColmeIA-cypress.git)
   ```
2. Acesse a pasta do projeto:

   ```bash
   cd Desafio-ColmeIA-cypress
   ```
3. Instale as dependências:

   ```bash
   npm install
   ```
   Como rodar os testes:
Modo Interativo (Interface Gráfica):

   ```bash

   npx cypress open
   ```
   Modo Headless (Terminal + Relatório):

   ```bash
   npx cypress run
   ```

🧪Cenários Cobertos
Login: Validação de credenciais válidas e inválidas.

Dashboard (Bancos de Dados):

Criação e exclusão de itens.

Validação de elementos estruturais (Header, Logo, Usuário).

Filtro de busca em tempo real.

[Skipped] Arquivamento de itens (bug identificado).

Atualização de tabela (Refresh/Reset).

Bugs e Melhorias Identificadas:
Durante o desenvolvimento da automação, os seguintes comportamentos foram mapeados:

Falha no Arquivamento: Ao clicar em "Arquivar" em um banco de dados, o registro desaparece da tabela principal, mas não é movido para a tela de "Itens arquivados" (perda de dados). O teste correspondente foi marcado com .skip() até a correção pela equipe de desenvolvimento.

UX / Comportamento do botão Refresh: O botão com ícone de recarregar na tabela está atuando como um "Reset" de sessão, apagando os registros recém-criados em vez de apenas buscar atualizações do servidor. Se o ambiente não possui persistência (mock), o teste valida esse reset. Caso contrário, é um defeito de integração.