describe('Cadastrar novo usuário', () => {
    it('Deve realizar cadastro de um novo usuário com sucesso', () => {
      cy.visit('/index.php?route=account/register');
  
      cy.wait(3000);
  
      const uniqueEmail = `user_${Date.now()}@example.com`;
  
      cy.get('#input-firstname').type('John');
      cy.get('#input-lastname').type('Doe');
      cy.get('#input-email').type(uniqueEmail);
      cy.get('#input-password').type('password');
      cy.get('input[name="agree"]').check();

      cy.contains('Continue').click();
      cy.wait(2000);
  
      cy.get('h1').should('contain', 'Your Account Has Been Created!');
      cy.contains('Congratulations! Your new account has been successfully created!').should('be.visible');
    });
  });
  