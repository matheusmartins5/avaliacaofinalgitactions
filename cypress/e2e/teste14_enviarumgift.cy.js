describe('Enviar Gift Certificate', () => {
    it('Deve enviar um gift certificate com sucesso', () => {
        cy.visit('/');

        cy.get('a').contains('Gift Certificates').click();

        cy.get('#input-to-name').type('Igor Schons', { delay: 100 });
        cy.get('#input-to-email').type('igorschons@ienh.com.br', { delay: 100 });
        cy.get('#input-from-name').type('Matheus Martins', { delay: 100 });
        cy.get('#input-from-email').type('matheusmartins@ienh.com.br', { delay: 100 });
        cy.contains('label', 'Birthday').prev('input').check();

        cy.get('#input-message').type('Parabéns pelo seu aniversário! Aproveite o presente!', { delay: 100 });
        cy.get('#input-amount').clear().type('50', { delay: 100 });

        cy.contains('Continue').click();

        cy.contains('Thank you for purchasing a gift certificate!').should('be.visible');
    });
});
