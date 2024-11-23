describe('Verificar histórico de pedidos', () => {
    it('Deve verificar se os pedidos estão listados', () => {
        cy.visit('/');

        cy.get('a').contains('My Account').click();
        cy.get('a').contains('Login').click();

        cy.get('#input-email').type('matheusmartins@ienh.com.br'), { delay: 100 };
        cy.get('#input-password').type('aaaaa'), { delay: 100 };
        cy.get('button').contains('Login').click();

        cy.contains('My Account').should('be.visible');

        cy.contains('View your order history').click();

        cy.get('.table tbody tr').should('have.length.greaterThan', 0);

    });
});