
describe('Button Group Component', () => {
    
    context('Gap', () => {
        it('Primary Button Gap', () => {
            cy.visit("http://localhost:4200/button-group");
            cy.get('[data-testid="primaryCompactButton"]').should("be.visible");
            cy.get('[data-testid="primaryCompactButton"]').should('have.attr', 'type', 'primary');
            cy.get('[data-testid="primaryCompactButton"]').shadow().find('button').should('have.class','compact')
        })

        it('Submit Button Gap', () => {
            cy.visit("http://localhost:4200/button-group");
            cy.get('[data-testid="submitCompactButton"]').should("be.visible");
            cy.get('[data-testid="submitCompactButton"]').should('have.attr', 'type', 'submit');
            cy.get('[data-testid="submitCompactButton"]').shadow().find('button').should('have.class','compact')
        })

        it('Secondary Button Gap', () => {
            cy.visit("http://localhost:4200/button-group");
            cy.get('[data-testid="secondaryCompactButton"]').should("be.visible");
            cy.get('[data-testid="secondaryCompactButton"]').should('have.attr', 'type', 'secondary');
            cy.get('[data-testid="secondaryCompactButton"]').shadow().find('button').should('have.class','compact')
        })
    })

    // Alignment Validation

})
