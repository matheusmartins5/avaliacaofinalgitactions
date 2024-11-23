describe('Adicionar novo endereço na conta', () => {
    it('Deve adicionar um novo endereço na conta com sucesso', () => {
        cy.visit('/');

        cy.get('a').contains('My Account').click();
        cy.get('a').contains('Login').click();

        cy.get('#input-email').type('matheusmartins@ienh.com.br', { delay: 100 });
        cy.get('#input-password').type('aaaaa', { delay: 100 });
        cy.get('button').contains('Login').click();

        cy.wait(2000);
        cy.contains('My Account').should('be.visible');

        cy.get('a').contains('Address Book').click();

        cy.get('a').contains('New Address').click();

        cy.get('#input-firstname').type('Matheus', { delay: 100 });
        cy.get('#input-lastname').type('Martins', { delay: 100 });
        cy.get('#input-address-1').type('Rua Augusto Raffler', { delay: 100 });
        cy.get('#input-city').type('Santa Cruz do Sul', { delay: 100 });
        cy.get('#input-postcode').type('96845-390', { delay: 100 });
        cy.get('#input-country').select('Brazil', { delay: 100 });
        cy.get('#input-zone').select('Rio Grande do Sul', { delay: 100 });
        cy.contains('Continue').click();

        cy.contains('Your address has been successfully added').should('be.visible');
    });
});