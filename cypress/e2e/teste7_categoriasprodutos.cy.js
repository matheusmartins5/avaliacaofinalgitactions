describe('Acesso às Categorias de Produtos', () => {
    it('Deve acessar as categorias de produtos corretamente', () => {
      cy.visit('/');
  
      cy.contains('Desktops').click();
      cy.contains('Show All Desktops').click();
      cy.get('h2').should('contain', 'Desktops');
      cy.wait(5000);
      
      cy.visit('/');
      
      cy.contains('Laptops & Notebooks').click();
      cy.contains('Show All Laptops & Notebooks').click();
      cy.get('h2').should('contain', 'Laptops');
      cy.wait(5000);
  
      cy.visit('/');
      
      cy.contains('Components').click();
      cy.contains('Show All Components').click();
      cy.get('h2').should('contain', 'Components');
      cy.wait(5000);
      
      cy.visit('/');
      
      cy.contains('Tablets').click();
      cy.get('h2').should('contain', 'Tablets');
      cy.wait(5000);
      
      cy.visit('/');
      
      cy.contains('Software').click();
      cy.get('h2').should('contain', 'Software');
      cy.wait(5000);
  
      cy.visit('/');
      
      cy.contains('Phones & PDAs').click();
      cy.get('h2').should('contain', 'Phones');
      cy.wait(5000);
  
      cy.visit('/');
      
      cy.contains('Cameras').click();  // Aqui clicamos no item "Cameras" diretamente
      cy.get('h2').should('contain', 'Cameras');

      cy.wait(5000);
      
      cy.visit('/');
      
      cy.contains('MP3 Players').click();
      cy.contains('Show All MP3 Players').click();
      cy.get('h2').should('contain', 'MP3');
    });
  });
  