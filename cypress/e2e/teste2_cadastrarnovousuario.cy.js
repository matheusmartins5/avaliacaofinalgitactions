describe('Cadastrar novo usuário', () => {
  it('Deve realizar cadastro de um novo usuário com sucesso', () => {
    cy.visit('/');

    cy.get('a').contains('My Account').click();
    cy.get('a').contains('Register').click();

    cy.wait(3000);

    const uniqueEmail = `usuario${Date.now()}@ienh.com`;

    cy.get('#input-firstname').type('Matheus'), { delay: 100 };
    cy.get('#input-lastname').type('Martins'), { delay: 100 };
    cy.get('#input-email').type(uniqueEmail), { delay: 100 };
    cy.get('#input-password').type('senha1234');
    cy.get('input[name="agree"]').check();

    cy.contains('Continue').click();
    cy.wait(2000);

    cy.get('h1').should('contain', 'Your Account Has Been Created!');
    cy.contains('Congratulations! Your new account has been successfully created!').should('be.visible');
  });
});
