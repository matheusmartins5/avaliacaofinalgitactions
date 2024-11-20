describe('Pesquisa de produto', () => {
    it('Deve pesquisar por "a" e exibir resultados com filtro de categoria', () => {
      
      cy.visit('/');
  
      cy.get('input[name="search"]').type('a');
    
      cy.get('button[type="button"]').first().click(); 

      cy.get('.product-thumb').should('have.length.greaterThan', 0); 

      cy.get('select[name="category_id"]').should('be.visible');
      
      cy.get('select[name="category_id"]').select('Phones & PDAs');
      
      cy.get('#button-search').click(); 
      
      cy.get('.product-thumb').should('have.length.greaterThan', 0); 
      
    });
  });
  