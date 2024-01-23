
describe('Button Component', () => {
    
    context('Primary Button Button', () => {
        it('Submit Button', () => {
            cy.visit("http://localhost:4200/button");
            cy.get('[data-testid="submitButton"]').should("be.visible");
            cy.get('[data-testid="submitButton"]').should('have.attr', 'type', 'submit');
        })
        it('Compact Size Button', () => {
            cy.visit("http://localhost:4200/button");
            cy.get('[data-testid="ButtonPrimaryCompact"]').should("be.visible");
            cy.get('[data-testid="ButtonPrimaryCompact"]').shadow().find('button').should('have.class', 'compact');
        })

        it('Normal Size Button', () => {
            cy.visit("http://localhost:4200/button");
            cy.get('[data-testid="ButtonPrimaryNormal"]').should("be.visible");
            cy.get('[data-testid="ButtonPrimaryNormal"]').shadow().find('button').should('have.class', 'normal');
        })

        it('Disable Button', () => {
            cy.visit("http://localhost:4200/button");
            cy.get('[data-testid="disabledPrimaryButton"]').should("be.visible");
            cy.get('[data-testid="disabledPrimaryButton"]').shadow().find('button').should('have.attr', 'disabled');
        })

        it('Destructive variant', () => {
            cy.visit("http://localhost:4200/button");
            cy.get('[data-testid="primaryDestructiveButton"]').should("be.visible");
            cy.get('[data-testid="primaryDestructiveButton"]').shadow().find('button').should('have.class','destructive');
        })

        it('Validate Primary Button CSS', () => {
            cy.visit("http://localhost:4200/button");
            
            cy.get('[data-testid="ButtonPrimaryNormal"]').shadow()
            .find("button.primary")
            .should("have.css", "border");
            cy.get('[data-testid="ButtonPrimaryNormal"]').shadow()
            .find("button.primary")
            .should(
                "have.css",
                "border-radius",
                remToPx("0.25rem")
            );
            cy.get('[data-testid="ButtonPrimaryNormal"]').shadow()
            .find("button.primary")
            .should(
                "have.css",
                "background-color",
                hexToRgb("#0070c4")
            );
            cy.get('[data-testid="ButtonPrimaryNormal"]').shadow()
            .find("button.primary")
            .eq(0)
            .rightclick({ force: true })
            .should(
                "have.css",
                "border-color",
                hexToRgb("#004f84")
            );
            cy.get('[data-testid="ButtonPrimaryNormal"]').shadow()
            .find("button.primary")
            .should("have.css", "font-family", "acumin-pro-semi-condensed, helvetica-neue, arial, sans-serif");
            cy.get('[data-testid="ButtonPrimaryNormal"]').shadow()
            .find("button.primary")
            .should(
                "have.css",
                "color",
                hexToRgb("#ffffff")
            );
            cy.get('[data-testid="ButtonPrimaryNormal"]').shadow()
            .find("button.primary")
            .should("have.css", "font-size", remToPx("1.25rem"));

        })

        it('Validate Compact Button CSS Property', () => {
            cy.visit("http://localhost:4200/button");
            cy.get('[data-testid="ButtonPrimaryCompact"]').should("be.visible");
        
            cy.get('[data-testid="ButtonPrimaryCompact"]').shadow()
            .find("button.primary.compact")
            .should(
                "have.css",
                "background-color",
                hexToRgb("#0070c4")
            );
            cy.get('[data-testid="ButtonPrimaryCompact"]').shadow()
            .find("button.primary.compact")
            .eq(0)
            .rightclick({ force: true })
            .should(
                "have.css",
                "border-color",
                hexToRgb("#004f84")
            );
            cy.get('[data-testid="ButtonPrimaryCompact"]').shadow()
            .find("button.primary.compact")
            .should("have.css", "border");
            cy.get('[data-testid="ButtonPrimaryCompact"]').shadow()
            .find("button.primary.compact")
            .should(
                "have.css",
                "border-radius",
                remToPx("0.25rem")
            );
            cy.get('[data-testid="ButtonPrimaryCompact"]').shadow()
            .find("button.primary.compact")
            .should("have.css", "font-family", "acumin-pro-semi-condensed, helvetica-neue, arial, sans-serif");
            cy.get('[data-testid="ButtonPrimaryCompact"]').shadow()
            .find("button.primary.compact")
            .should(
                "have.css",
                "height",
                remToPx("2rem")
            );
            cy.get('[data-testid="ButtonPrimaryCompact"]').shadow()
            .find("button.primary.compact")
            .should(
                "have.css",
                "color",
                hexToRgb("#ffffff")
            );
            cy.get('[data-testid="ButtonPrimaryCompact"]').shadow()
            .find("button.primary.compact")
            .should("have.css", "font-size", remToPx("1.125rem"));
        })
    })

    context('Secondary Button Button', () => {
        it('Secondary Button', () => {
            cy.visit("http://localhost:4200/button");
            cy.get('[data-testid="secondaryButton"]').should("be.visible");
            cy.get('[data-testid="secondaryButton"]').should('have.attr', 'type', 'secondary');
        })

        it('Compact Size Button', () => {
            cy.visit("http://localhost:4200/button");
            cy.get('[data-testid="ButtonSecondaryCompact"]').should("be.visible");
            cy.get('[data-testid="ButtonSecondaryCompact"]').shadow().find('button').should('have.class', 'compact');
        })

        it('Normal Size Button', () => {
            cy.visit("http://localhost:4200/button");
            cy.get('[data-testid="ButtonSecondaryNormal"]').should("be.visible");
            cy.get('[data-testid="ButtonSecondaryNormal"]').shadow().find('button').should('have.class', 'normal');
        })

        it('Disable Button', () => {
            cy.visit("http://localhost:4200/button");
            cy.get('[data-testid="disabledSecondaryButton"]').should("be.visible");
            cy.get('[data-testid="disabledSecondaryButton"]').shadow().find('button').should('have.attr', 'disabled');
        })

        it('Destructive variant', () => {
            cy.visit("http://localhost:4200/button");
            cy.get('[data-testid="secondaryDestructiveButton"]').should("be.visible");
            cy.get('[data-testid="secondaryDestructiveButton"]').shadow().find('button').should('have.class','destructive');
        })

        it('Validate Secondary CSS', () => {
            cy.visit("http://localhost:4200/button");
            
            cy.get('[data-testid="ButtonSecondaryNormal"]').shadow()
            .find("button.secondary")
            .should("have.css", "border");
            cy.get('[data-testid="ButtonSecondaryNormal"]').shadow()
            .find("button.secondary")
            .should(
                "have.css",
                "border-radius",
                remToPx("0.25rem")
            );
            cy.get('[data-testid="ButtonSecondaryNormal"]').shadow()
            .find("button.secondary")
            .should("have.css", "font-family", "acumin-pro-semi-condensed, helvetica-neue, arial, sans-serif");
            cy.get('[data-testid="ButtonSecondaryNormal"]').shadow()
            .find("button.secondary")
            .should(
                "have.css",
                "color",
                hexToRgb("#0070c4")
            );
            cy.get('[data-testid="ButtonSecondaryNormal"]').shadow()
            .find("button.secondary")
            .eq(0)
            .rightclick({ force: true })
            .should(
                "have.css",
                "border-color",
                hexToRgb("#004f84")
            );
            cy.get('[data-testid="ButtonSecondaryNormal"]').shadow()
            .find("button.secondary")
            .should("have.css", "font-size", remToPx("1.25rem"));
            
        })

        it('Validate Compact Button CSS properties', () => {
            cy.visit("http://localhost:4200/button");
            cy.get('[data-testid="ButtonSecondaryCompact"]').should("be.visible");

            cy.get('[data-testid="ButtonSecondaryCompact"]').shadow()
            .find("button.secondary.compact")
            .should("have.css", "border");
            cy.get('[data-testid="ButtonSecondaryCompact"]').shadow()
            .find("button.secondary.compact")
            .should(
                "have.css",
                "border-radius",
                remToPx("0.25rem")
            );
            cy.get('[data-testid="ButtonSecondaryCompact"]').shadow()
            .find("button.secondary.compact")
            .should("have.css", "font-family", "acumin-pro-semi-condensed, helvetica-neue, arial, sans-serif");
            cy.get('[data-testid="ButtonSecondaryCompact"]').shadow()
            .find("button.secondary.compact")
            .should(
                "have.css",
                "height",
                remToPx("2rem")
            );
            cy.get('[data-testid="ButtonSecondaryCompact"]').shadow()
            .find("button.secondary.compact")
            .should(
                "have.css",
                "color",
                hexToRgb("#0070c4")
            );
            cy.get('[data-testid="ButtonSecondaryCompact"]').shadow()
            .find("button.secondary.compact")
            .eq(0)
            .rightclick({ force: true })
            .should(
                "have.css",
                "border-color",
                hexToRgb("#004f84")
            );
            cy.get('[data-testid="ButtonSecondaryCompact"]').shadow()
            .find("button.secondary.compact")
            .should("have.css", "font-size", remToPx("1.125rem"));

        })
    })
    context('Tertiary Button Button', () => {
        it('Tertiary Button', () => {
            cy.visit("http://localhost:4200/button");
            cy.get('[data-testid="tertiaryButton"]').should("be.visible");
            cy.get('[data-testid="tertiaryButton"]').should('have.attr', 'type', 'tertiary');
        })

        it('Compact Size Button', () => {
            cy.visit("http://localhost:4200/button");
            cy.get('[data-testid="ButtonTertiaryCompact"]').should("be.visible");
            cy.get('[data-testid="ButtonTertiaryCompact"]').shadow().find('button').should('have.class', 'compact');
        })

        it('Normal Size Button', () => {
            cy.visit("http://localhost:4200/button");
            cy.get('[data-testid="ButtonTertiaryNormal"]').should("be.visible");
            cy.get('[data-testid="ButtonTertiaryNormal"]').shadow().find('button').should('have.class', 'normal');
        })

        it('Disable Button', () => {
            cy.visit("http://localhost:4200/button");
            cy.get('[data-testid="disabledTertiaryButton"]').should("be.visible");
            cy.get('[data-testid="disabledTertiaryButton"]').shadow().find('button').should('have.attr', 'disabled');
        })

        it('Destructive variant', () => {
            cy.visit("http://localhost:4200/button");
            cy.get('[data-testid="tertiaryDestructiveButton"]').should("be.visible");
            cy.get('[data-testid="tertiaryDestructiveButton"]').shadow().find('button').should('have.class','destructive');
        })

        it('Validate Tertiary CSS', () => {
            cy.visit("http://localhost:4200/button");

            cy.get('[data-testid="ButtonTertiaryNormal"]').shadow()
        .find("button.tertiary")
        .should("have.css", "border");
        cy.get('[data-testid="ButtonTertiaryNormal"]').shadow()
        .find("button.tertiary")
        .should(
            "have.css",
            "border-radius",
            remToPx("0.25rem")
        );
        cy.get('[data-testid="ButtonTertiaryNormal"]').shadow()
        .find("button.tertiary")
        .should("have.css", "font-family", "acumin-pro-semi-condensed, helvetica-neue, arial, sans-serif");
        cy.get('[data-testid="ButtonTertiaryNormal"]').shadow()
        .find("button.tertiary")
        .should(
            "have.css",
            "color",
            hexToRgb("#0070c4")
        );
        cy.get('[data-testid="ButtonTertiaryNormal"]').shadow()
        .find("button.tertiary")
        .eq(0)
        .rightclick({ force: true })
        .should(
            "have.css",
            "border-color",
            hexToRgb("#f1f1f1")
        );
        // cy.get('[data-testid="ButtonTertiaryNormal"]').find('button.tertiary').eq(0).click({ force: true }).should("have.css", "box-shadow", hexToRgb(properties["goa-color-interactivefocus"]));
        cy.get('[data-testid="ButtonTertiaryNormal"]').shadow()
        .find("button.tertiary")
        .should("have.css", "font-size", remToPx("1.25rem"));

        })


        it('Validate Compact Button CSS Properties', () => {
            cy.visit("http://localhost:4200/button");
            cy.get('[data-testid="ButtonTertiaryCompact"]').should("be.visible");

            cy.get('[data-testid="ButtonTertiaryCompact"]').shadow()
            .find("button.tertiary.compact")
            .should("have.css", "border");
            cy.get('[data-testid="ButtonTertiaryCompact"]').shadow()
            .find("button.tertiary.compact")
            .should(
                "have.css",
                "border-radius",
                remToPx("0.25rem")
            );
            cy.get('[data-testid="ButtonTertiaryCompact"]').shadow()
            .find("button.tertiary.compact")
            .should("have.css", "font-family", "acumin-pro-semi-condensed, helvetica-neue, arial, sans-serif");
            cy.get('[data-testid="ButtonTertiaryCompact"]').shadow()
            .find("button.tertiary.compact")
            .should(
                "have.css",
                "height",
                remToPx("2rem")
            );
            cy.get('[data-testid="ButtonTertiaryCompact"]').shadow()
            .find("button.tertiary.compact")
            .should(
                "have.css",
                "color",
                hexToRgb("#0070c4")
            );
            cy.get('[data-testid="ButtonTertiaryCompact"]').shadow()
            .find("button.tertiary.compact")
            .eq(0)
            .rightclick({ force: true })
            .should(
                "have.css",
                "border-color",
                hexToRgb("#f1f1f1")
            );
            cy.get('[data-testid="ButtonTertiaryCompact"]').shadow()
            .find("button.tertiary.compact")
            .should("have.css", "font-size", remToPx("1.125rem"));
        })
    })

    it('Default Type and Size', () => {
        cy.visit("http://localhost:4200/button");
        cy.get('[data-testid="defaultButton"]').should("be.visible");
        cy.get('[data-testid="defaultButton"]').shadow().find('button').should('have.class', 'primary normal');
    })
    
    context('Leading and Trailing Icon', () => {
        it('Leading Icon', () => {
            cy.visit("http://localhost:4200/button");
            cy.get('[data-testid="leadingIconButton"]').should("be.visible");
            cy.get('[data-testid="leadingIconButton"]').should('have.attr','leadingicon');
            cy.get('[data-testid="leadingIconButton"]').shadow().find('#leading-icon').should('exist');
        })

        it('Trailing Icon', () => {
            cy.visit("http://localhost:4200/button");
            cy.get('[data-testid="TrailingIconButton"]').should("be.visible");
            cy.get('[data-testid="TrailingIconButton"]').should('have.attr','trailingicon');
            cy.get('[data-testid="TrailingIconButton"]').shadow().find('#trailing-icon').should('exist');
        })

        it('Leading and Trailing Icon', () => {
            cy.visit("http://localhost:4200/button");
            cy.get('[data-testid="LeadTrailIconButton"]').should("be.visible");
            cy.get('[data-testid="LeadTrailIconButton"]').shadow().find('#leading-icon').should('exist');
            cy.get('[data-testid="LeadTrailIconButton"]').shadow().find('#trailing-icon').should('exist');
        })


    })

    function remToPx(rem: any) {
        return rem.replace("rem", "") * 16 + "px";
      }
      
      //function to convery hex to rgb
      // return rgb(r, g, b)
      function hexToRgb(hex: any) {
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
