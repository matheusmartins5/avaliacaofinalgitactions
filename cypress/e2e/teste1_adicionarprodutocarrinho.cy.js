describe('Adicionar produto ao carrinho', () => {
  it('Deve adicionar um produto ao carrinho e verificar se está no carrinho', () => {
    cy.visit('/');

    cy.wait(3000);

    cy.contains('MacBook').click();
    cy.wait(2000);
    cy.contains('Add to Cart').click();

    cy.get('.alert').should('contain', 'Success: You have added MacBook');

    cy.wait(3000);

    cy.contains('Shopping Cart').click({ force: true });
    cy.wait(2000);

    cy.get('#content').should('contain', 'MacBook');
  });
});


