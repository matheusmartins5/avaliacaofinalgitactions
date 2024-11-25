describe('Comparar produto', () => {
    it('Deve adicionar produtos à comparação com sucesso', () => {
        cy.visit('/');

        cy.get('a').contains('My Account').click();
        cy.get('a').contains('Login').click();

        cy.get('#input-email').type('matheusmartins@ienh.com.br', { delay: 100 });
        cy.get('#input-password').type('aaaaa', { delay: 100 });
        cy.get('button').contains('Login').click();

        cy.wait(4000);

        cy.visit('/');

        cy.contains('MacBook').click();

        cy.get('.btn-group').find('button').eq(1).should('be.visible').click();

        cy.visit('/');

        cy.contains('iPhone').click();
        cy.wait(4000);

        cy.get('.btn-group').find('button').eq(1).should('be.visible').click();

        cy.contains('product comparison').should('be.visible').click();

        cy.wait(2000);

        cy.get('.table tbody tr').should('have.length.greaterThan', 1);
    });
});
