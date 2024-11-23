describe('Login e Alteração de Senha', () => {
  it('Deve alterar a senha do usuário', () => {
    cy.visit('/');
      
    cy.get('a').contains('My Account').click();
    cy.get('a').contains('Login').click();

    cy.get('#input-email').type('teste@ienh.com.br');
    cy.get('#input-password').type('teste1234');
    cy.get('button').contains('Login').click();

    cy.contains('My Account').should('be.visible');

    cy.contains('Change your password').click(); 

    cy.get('#input-password').type('teste1234');
    cy.get('#input-confirm').type('teste1234'); 
    cy.contains('Continue').click();

    cy.contains('Your password has been successfully updated.').should('be.visible');

  });
});
