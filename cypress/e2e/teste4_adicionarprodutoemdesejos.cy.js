describe('Adicionar produto à Wish List', () => {
    it('Deve adicionar o produto à Wish List com sucesso', () => {

        cy.visit('/');

        cy.get('a').contains('My Account').click();
        cy.get('a').contains('Login').click();

        cy.get('#input-email').type('matheusmartins@ienh.com.br', { delay: 100 });
        cy.get('#input-password').type('aaaaa'), { delay: 100 };
        cy.get('button').contains('Login').click(), { delay: 100 };

        cy.wait(4000);
        cy.visit('/');

        cy.contains('MacBook').click();
        cy.wait(4000);

        cy.get('.btn-group').find('button').first().should('be.visible').click();

        cy.contains('wish list').should('be.visible').click();

        cy.wait(2000);

        cy.get('.table tbody tr').should('have.length.greaterThan', 0);



    });
});
