describe('Recuperar senha', () => {
    it('Deve iniciar processo de recuperação de senha', () => {
      cy.visit('/index.php?route=account/forgotten');
      cy.get('#input-email').type('test@example.com');
      cy.contains('Continue').click();
      cy.wait(2000);
      cy.get('.alert').should('contain', 'Success: Your password has been successfully updated.');
    });
  });