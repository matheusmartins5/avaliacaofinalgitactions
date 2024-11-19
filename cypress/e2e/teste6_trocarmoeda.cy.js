describe('Trocar moeda do site', () => {
  it('Deve trocar a moeda de exibição dos preços', () => {
    cy.visit('/');
    cy.get('.btn-group').contains('Currency').click();
    cy.contains('Euro').click();
    cy.wait(2000);
    cy.get('.price').first().should('contain', '€');

    //Teste
  });
});


