describe('Cadastrar novo usuário', () => {
  it('Deve realizar o cadastro com sucesso', () => {
    cy.visit('/');

    cy.get('a').contains('My Account').click();
    cy.get('a').contains('Register').click();

    cy.wait(3000);

    const randomUsername = `user_${Cypress._.random(0, 1e6)}`;
    const randomPassword = `pass_${Cypress._.random(0, 1e6)}`;
    const randomEmail = `${randomUsername}@ienh.com`;

    cy.get('#input-firstname').type('Matheus', { delay: 100 });
    cy.get('#input-lastname').type('Martins', { delay: 100 });
    cy.get('#input-email').type(randomEmail, { delay: 100 });
    cy.get('#input-password').type(randomPassword, { delay: 100 });
    cy.get('input[name="agree"]').check();

    cy.contains('Continue').click();

    cy.wait(2000);

    cy.get('h1').should('contain', 'Your Account Has Been Created!');
    cy.contains('Congratulations! Your new account has been successfully created!').should('be.visible');
  });
});

