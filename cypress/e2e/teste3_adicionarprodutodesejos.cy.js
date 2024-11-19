describe('Adicionar produto à lista de desejos', () => {
    it('Deve adicionar um produto à lista de desejos', () => {
      cy.visit('/index.php?route=account/login');
      cy.get('#input-email').type('matheusmartins@ienh.com.br');
      cy.get('#input-password').type('aaaaa'), { delay: 100 };
      cy.get('button').contains('Login').click();
  
      cy.wait(3000);
  
      cy.contains('My Account').should('be.visible');
  
      cy.visit('/');
  
      cy.wait(3000);
  
      cy.contains('MacBook').should('be.visible').click();
  
      cy.wait(2000);
  
      cy.get('button[data-bs-original-title="Add to Wish List"] i.fa-heart').click({ force: true });

      cy.get('button').contains('fa-solid fa-heart').click();

      //teste




      cy.wait(2000);
  
      cy.get('.alert').should('contain', 'Success: You have added MacBook to your wish list');
    });
  });
  