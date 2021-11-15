describe('Page Navigation', () => {
    it('should navigate from Welcome page to individual Pokemon page', () => {
      // Start from the index page
      cy.visit('/')
  
      // Find a link with an href attribute containing "about" and click it
      cy.get('[data-cy=pokedex-nav]').contains('Click to Start').click()
  
      // The new url should include "/about"
      cy.url().should('include', '/pokedex')
  
      // The new page should contain an textbox searchbar
      cy.findByRole('textbox', {id: /search/i }).type('Pikachu')
      cy.findByRole('button', {id: /search-button/i}).click()

      cy.get('[data-cy=pokemon-nav]').findByRole('heading', {name: /Pikachu/i }).click()
      cy.url().should('include', '/pokedex/pikachu')

      cy.get('#react-tabs-2').click()
      cy.get('#react-tabs-4').click()

      cy.get('[data-cy=evo-nav]').findByRole('heading', {name: /Pichu/i }).click()
      cy.url().should('include', '/pokedex/pichu')
    })
  })