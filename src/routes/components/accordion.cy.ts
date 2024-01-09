// import {  } from '@abgov/angular-components';


describe('Accordion Component', () => {
    it('user can expands the accordion', () => {
      cy.visit("http://localhost:4200/accordion");
      cy.get("[data-testid='headingAccordion']").should("be.visible");
      cy.get("[data-testid='headingAccordion']").click();
      cy.get("[data-testid='headingAccordion']").then(($pTag) => {
        const content = $pTag.text().trim();
        console.log("Content Variable: "+content);
        const expectedContent = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa`;
        expect(content).to.contain(expectedContent.trim());
      });
    })
  
    it('user can collapsed the accordion', () => {
      cy.visit("http://localhost:4200/accordion");
      cy.get("[data-testid='secondaryAccordion']").should("be.visible");
      cy.get("[data-testid='secondaryAccordion']").shadow().find(".container-small").click();
      cy.get("[data-testid='secondaryAccordion']").shadow().find(".container-small").click();
      cy.get("[data-testid='secondaryAccordion']").shadow().find("details").should('not.have.attr', 'open');
    })
  
    it('Accordions stays open on page load', () => {
      cy.visit("http://localhost:4200/accordion");
      cy.get("[data-testid='defaultOpenAccordion']").should("be.visible");
      cy.get("[data-testid='defaultOpenAccordion']").shadow().find("details").should('have.attr', 'open');
    })
  
    it('Accordions Heading size Medium', () => {
      cy.visit("http://localhost:4200/accordion");
      cy.get("[data-testid='defaultOpenAccordion']").should("be.visible");
      cy.get("[data-testid='defaultOpenAccordion']").shadow().find("span").should('have.class', 'heading-medium');
    })
  
    it('Accordions Heading size Small', () => {
      cy.visit("http://localhost:4200/accordion");
      cy.get("[data-testid='secondaryAccordion']").should("be.visible");
      cy.get("[data-testid='secondaryAccordion']").shadow().find("span").should('have.class', 'heading-small');
    })
  
      it('Accordions Badges', () => {
        cy.visit("http://localhost:4200/accordion");
        cy.get("[data-testid='defaultOpenAccordion']").should("be.visible");
        cy.get('[data-testid="defaultOpenAccordion"] goa-badge[type="success"]').should('exist');
      })
  
  })