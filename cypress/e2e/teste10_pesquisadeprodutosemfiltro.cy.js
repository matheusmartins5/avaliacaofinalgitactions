describe('Pesquisa de produto', () => {
    it('Deve pesquisar por "Canon" e exibir resultados', () => {
      // Acessa a página principal
      cy.visit('/');
  
      cy.get('input[name="search"]').type('iPod');
      cy.get('button[type="button"]').first().click(); 
  
      cy.get('.product-thumb').should('have.length.greaterThan', 0); 
  
      cy.get('h4').should('contain', 'iPod');
    });
  });
  