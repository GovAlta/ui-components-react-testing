
describe('Checkbox Component', () => {
    
    context('Basic Checkbox', () => {
        it('Toggle Checkbox', () => {
            cy.visit("http://localhost:4200/checkbox");
            cy.get('[data-testid="basicCheckbox"]').should("be.visible");

            cy.get('[data-testid="basicCheckbox"]').shadow().find('div.goa-checkbox-container').click();

            //Verify Toggle is checked 
            cy.get('[data-testid="basicCheckbox"]').shadow().find('div.goa-checkbox-container').should('have.class','goa-checkbox--selected');
        })

        it('Default Checked State', () => {
            cy.visit("http://localhost:4200/checkbox");
            cy.get('[data-testid="defaultCheckedCheckbox"]').should("be.visible");

            //Verify Toggle is checked 
            cy.get('[data-testid="defaultCheckedCheckbox"]').shadow().find('div.goa-checkbox-container').should('have.class','goa-checkbox--selected');
        })

        it('Disabled Checkbox', () => {
            cy.visit("http://localhost:4200/checkbox");
            cy.get('[data-testid="disabledCheckbox"]').should("be.visible");

            //Verify Toggle is checked 
            cy.get('[data-testid="disabledCheckbox"]').shadow().find('label.goa-checkbox-label').should('have.class','goa-checkbox--disabled');
        })


        it('Basic Checkbox CSS Property', () => {
            cy.visit("http://localhost:4200/checkbox");
            cy.get('[data-testid="basicCheckbox"]').should("be.visible");

            cy.get('[data-testid="basicCheckbox"]').shadow()
                .find("label.goa-checkbox-label")
                .find("div.goa-checkbox-container")
                .should("have.css", "border");

            cy.get('[data-testid="basicCheckbox"]').shadow()
                .find("label.goa-checkbox-label")
                .find("div.goa-checkbox-container")
                .should("have.css", "border")
                .should("contain", hexToRgb("#666666"));
            
            cy.get('[data-testid="basicCheckbox"]').shadow()
                .find("label.goa-checkbox-label")
                .find("div.goa-checkbox-container")
                .should("have.css", "box-sizing", "border-box");
            
            cy.get('[data-testid="basicCheckbox"]').shadow()
                .find("label.goa-checkbox-label")
                .find("div.goa-checkbox-container")
                .should("have.css", "color", hexToRgb("#333333"));
            
            cy.get('[data-testid="basicCheckbox"]').shadow()
                .find("label.goa-checkbox-label")
                .find("div.goa-checkbox-container")
                .should("have.css", "font-size", remToPx("1.125rem"));
            
            cy.get('[data-testid="basicCheckbox"]').shadow()
                .find("label.goa-checkbox-label")
                .find("div.goa-checkbox-container")
                .should("have.css", "font-family", "acumin-pro-semi-condensed, helvetica-neue, arial, sans-serif");

        })

        it('Disabled Checkbox', () => {
            cy.visit("http://localhost:4200/checkbox");
            cy.get('[data-testid="disabledCheckbox"]').should("be.visible");

            cy.get('[data-testid="disabledCheckbox"]').shadow()
                .find('label[class="goa-checkbox-label goa-checkbox--disabled"]')
                .should("have.css", "border");
            
            cy.get('[data-testid="disabledCheckbox"]').shadow()
                .find('label[class="goa-checkbox-label goa-checkbox--disabled"]')
                .find("div.goa-checkbox-container")
                .should("have.css", "border")
                .should("contain", hexToRgb("#adadad"));
            
            cy.get('[data-testid="disabledCheckbox"]').shadow()
                .find('label[class="goa-checkbox-label goa-checkbox--disabled"]')
                .should("have.css", "color", hexToRgb("#333333"));
            
            cy.get('[data-testid="disabledCheckbox"]').shadow()
                .find('label[class="goa-checkbox-label goa-checkbox--disabled"]')
                .should("have.css", "font-size", remToPx("1.125rem"));
            
            cy.get('[data-testid="disabledCheckbox"]').shadow()
                .find('label[class="goa-checkbox-label goa-checkbox--disabled"]')
                .should("have.css", "font-family", "acumin-pro-semi-condensed, helvetica-neue, arial, sans-serif");
    })

    it('Validate Error Checkbox', () => {
        cy.visit("http://localhost:4200/checkbox");
        cy.get('[data-testid="errorCheckbox"]').should("be.visible");

        cy.get('[data-testid="errorCheckbox"]').shadow()
            .find("label.goa-checkbox-label.goa-checkbox--error")
            .should("have.css", "border");

        cy.get('[data-testid="errorCheckbox"]').shadow()
            .find("label.goa-checkbox-label.goa-checkbox--error")
            .should("have.css", "color", hexToRgb("#333333"));
        
        cy.get('[data-testid="errorCheckbox"]').shadow()
            .find("label.goa-checkbox-label.goa-checkbox--error")
            .should("have.css", "font-size", remToPx("1.125rem"));
        
        cy.get('[data-testid="errorCheckbox"]').shadow()
            .find("label.goa-checkbox-label.goa-checkbox--error")
            .should("have.css", "font-family", "acumin-pro-semi-condensed, helvetica-neue, arial, sans-serif");

    })

    })

    function remToPx(rem:any) {
        return rem.replace("rem", "") * 16 + "px";
      }
      
      function hexToRgb(hex:any) {
        const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
        return result
          ? "rgb(" +
              parseInt(result[1], 16) +
              ", " +
              parseInt(result[2], 16) +
              ", " +
              parseInt(result[3], 16) +
              ")"
          : null;
      }
    })
