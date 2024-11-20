describe('Realizar compra completa', () => {
    it('Deve realizar a compra completa', () => {
        cy.visit('/');

        cy.get('a').contains('My Account').click();
        cy.get('a').contains('Login').click(); 
  
        cy.get('#input-email').type('matheusmartins@ienh.com.br' ,{ delay: 100 });
        cy.get('#input-password').type('aaaaa'), { delay: 100 };
        cy.get('button').contains('Login').click(), {delay:100};
  
        cy.wait(2000);
        cy.contains('My Account').should('be.visible');

        cy.visit('/');
        cy.wait(2000);

        cy.contains('Desktops').click();
        cy.contains('Mac (1)').click();
        cy.get('h4').should('contain', 'iMac');
        cy.get('h4').contains('iMac').click();;
        cy.wait(2000);

        cy.contains('Add to Cart').should('be.visible').click();
        cy.wait(2000);

        cy.contains('shopping cart').should('be.visible');
        cy.wait(2000);

        cy.get('a').contains('Checkout').click({ force: true }); 
        cy.wait(2000);

        cy.get('#input-shipping-existing').check();
        cy.get('#input-shipping-address').select('1171'); 

        cy.get('#button-shipping-methods').click(); 
        cy.get('#input-shipping-method-flat-flat').type('Flat Shipping Rate - $5.00'); 
        cy.get('#button-shipping-method').click({ force: true }); 
        cy.wait(2000);

        cy.get('#button-payment-methods').click(); 
        cy.get('#input-payment-method-cod-cod').type('Cash On Delivery'); 
        cy.get('#button-payment-method').click({ force: true });
        cy.wait(2000);

        cy.get('button').contains('Confirm Order').click();

        cy.contains('Your order has been placed!').should('be.visible');
    });
});
