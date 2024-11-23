describe('Trocar moeda do site', () => {
  it('Deve trocar a moeda de exibição dos preços para Euro, Libra e Dólar', () => {
    cy.visit('/');

    cy.get('a.dropdown-toggle').contains('Currency').click();

    cy.contains('Euro').click();
    cy.wait(2000);
    cy.get('.price').first().should('contain', '€');

    cy.get('a.dropdown-toggle').contains('Currency').click();
    cy.contains('Pound Sterling').click();
    cy.wait(2000);
    cy.get('.price').first().should('contain', '£');

    cy.get('a.dropdown-toggle').contains('Currency').click();
    cy.contains('US Dollar').click();
    cy.wait(2000);
    cy.get('.price').first().should('contain', '$');
  });
});

