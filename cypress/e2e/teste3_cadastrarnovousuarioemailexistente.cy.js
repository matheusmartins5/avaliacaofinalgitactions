describe('Cadastrar novo usuário com o e-mail de um usuário existente', () => {
  it('Não deve permitir cadastrar e exibir mensagem de erro', () => {
    cy.visit('/');

    cy.get('a').contains('My Account').click();
    cy.get('a').contains('Register').click();

    cy.wait(3000);

    cy.get('#input-firstname').type('Matheus');
    cy.get('#input-lastname').type('Martins');
    cy.get('#input-email').type('matheusmartins@ienh.com.br');
    cy.get('#input-password').type('senha1234');
    cy.get('input[name="agree"]').check();

    cy.wait(2000);
    cy.contains('Continue').click();

    cy.contains('Warning: E-Mail Address is already registered!').should('be.visible');
  });
});

