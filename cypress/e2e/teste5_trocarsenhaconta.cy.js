describe('Login e Alteração de Senha', () => {
  it('Deve alterar a senha do usuário', () => {
    cy.visit('/index.php?route=account/login');

    cy.get('#input-email').type('matheusmartins@ienh.com.br');
    cy.get('#input-password').type('aaaaa');
    cy.get('button').contains('Login').click();

    cy.contains('My Account').should('be.visible');

    cy.contains('Change your password').click(); 

    cy.get('#input-password').type('aaaaa');
    cy.get('#input-confirm').type('aaaaa'); 
    cy.contains('Continue').click();

    cy.contains('Your password has been successfully updated.').should('be.visible');

  });
});
