describe('Comparar produtos', () => {
    it('Deve adicionar produtos à comparação e exibir comparação', () => {
      cy.visit('/');
      cy.contains('MacBook').should('be.visible').click();
      cy.contains('Compare this Product').click();
      cy.wait(2000);
      cy.visit('/');
      cy.contains('iPhone').should('be.visible').click();
      cy.contains('Compare this Product').click();
      cy.get('#compare-total').should('contain', 'Product Comparison');
    });
  });