describe('Enviar mensagem de contato', () => {
    it('Deve enviar uma mensagem de contato com sucesso', () => {
        cy.visit('/');

        cy.get('a').contains('Contact Us').click();

        cy.get('#input-name').type('Matheus Martins', { delay: 100 });
        cy.get('#input-email').type('matheusmartins@ienh.com.br', { delay: 100 });

        cy.get('#input-enquiry').type('Gostaria de saber mais sobre os produtos!', { delay: 100 });
        cy.contains('Submit').click();

        cy.contains('Your enquiry has been successfully sent to the store owner!').should('be.visible'); // Verifica se a mensagem de sucesso aparece
    });
});
