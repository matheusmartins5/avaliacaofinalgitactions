describe('Cadastrar novo usuário com o e-mail de um usuário existente', () => {
    it('Não deve permitir cadastrar e exibir mensagem de erro', () => {
      cy.visit('/index.php?route=account/register');
  
      cy.wait(3000);
  
      cy.get('#input-firstname').type('Matheus');
      cy.get('#input-lastname').type('Martins');
      cy.get('#input-email').type('matheusmartins@ienh.com.br');
      cy.get('#input-password').type('senha1234');
      cy.get('input[name="agree"]').check();

      cy.contains('Continue').click();
      cy.wait(2000);
  
      cy.get('h1').should('contain', 'Your Account Has Been Created!');
      cy.contains('Congratulations! Your new account has been successfully created!').should('be.visible');
    });
  });

