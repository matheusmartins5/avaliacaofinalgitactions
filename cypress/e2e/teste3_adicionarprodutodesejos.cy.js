describe('Adicionar produto à lista de desejos', () => {
  it('Deve adicionar um produto à lista de desejos a partir da página de produto', () => {
    // Acessa a página do produto
    cy.visit('https://demo.opencart.com/en-gb/product/macbook');

    // Espera o botão "Add to Wish List" aparecer
    cy.get('button[data-bs-original-title="Add to Wish List"]', { timeout: 10000 })
      .should('be.visible') // Garante que o botão está visível
      .trigger('mouseover') // Simula o hover sobre o botão para mostrar o tooltip
      .then(($btn) => {
        // Verifica se o título do botão é correto após o hover
        expect($btn.attr('data-bs-original-title')).to.equal('Add to Wish List');
      });

    // Clica no botão "Add to Wish List" para adicionar o produto à lista de desejos
    cy.get('button[data-bs-original-title="Add to Wish List"]', { timeout: 10000 })
      .should('be.visible')
      .click({ force: true }); // Clica no botão para adicionar à lista de desejos

    // Verifica se a mensagem de sucesso é exibida
    cy.get('.alert').should('contain', 'Success: You have added MacBook to your wish list');
  });
});
