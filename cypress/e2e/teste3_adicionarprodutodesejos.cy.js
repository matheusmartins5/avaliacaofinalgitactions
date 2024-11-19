describe('Adicionar produto à lista de desejos', () => {
  it('Deve adicionar um produto à lista de desejos', () => {
    // Acessa a página de login
    cy.visit('/index.php?route=account/login');

    // Realiza o login
    cy.get('#input-email').type('matheusmartins@ienh.com.br');
    cy.get('#input-password').type('aaaaa');
    cy.get('button').contains('Login').click();

    // Verifica se o login foi bem-sucedido
    cy.contains('My Account').should('be.visible');

    // Vai para a página inicial
    cy.visit('/');

    // Clica no produto "MacBook"
    cy.contains('MacBook').click();

    // Verifica o carregamento do produto
    cy.url().should('include', 'macbook');
    cy.get('h1').should('contain', 'MacBook');

    cy.get('button[data-bs-original-title="Add to Wish List"]')
  .scrollIntoView()
  .trigger('mouseover')
  .should('be.visible')
  .click();

    // Verifica a mensagem de sucesso
    cy.get('.alert').should('contain', 'Success: You have added MacBook to your wish list');
  });
});
