

describe('Badge Component', () => {
    
    context('Success Badge', () => {
        it('With Icon and Content', () => {
            cy.visit("http://localhost:4200/badge");
            cy.get('[data-testid="successIconTextBadge"]').should("be.visible");
    
            cy.get('[data-testid="successIconTextBadge"]').should('have.attr', 'type', 'success');
            cy.get('[data-testid="successIconTextBadge"]').should('have.attr', 'content', 'Success');
            cy.get('[data-testid="successIconTextBadge"]').should('have.attr', 'icon');
            cy.get('[data-testid="successIconTextBadge"]').shadow().find('div').should('have.class','goa-badge badge-success');
    
            //Verify Icon exist
            cy.get('[data-testid="successIconTextBadge"]').shadow().find('div').find('goa-icon').should('exist');
        })
    
        it('With Content Only', () => {
            cy.visit("http://localhost:4200/badge");
            cy.get('[data-testid="successTextBadge"]').should("be.visible");
            cy.get('[data-testid="successTextBadge"]').should('have.attr', 'type', 'success');
            cy.get('[data-testid="successTextBadge"]').should('have.attr', 'content');
            cy.get('[data-testid="successTextBadge"]').should('not.have.attr', 'icon');
            cy.get('[data-testid="successTextBadge"]').should('have.attr', 'content', 'Success');
            cy.get('[data-testid="successTextBadge"]').shadow().find('div').should('have.class','goa-badge badge-success');
    
            //Verify Text in Badge 
            cy.get('[data-testid="successTextBadge"]').shadow().find('div').contains('.goa-badge-content', 'Success');
        })
    
        it('With Icon Only', () => {
            cy.visit("http://localhost:4200/badge");
            cy.get('[data-testid="successIconBadge"]').should("be.visible");
            cy.get('[data-testid="successIconBadge"]').should('have.attr', 'type', 'success');
            cy.get('[data-testid="successIconBadge"]').should('have.attr', 'icon');
            cy.get('[data-testid="successIconBadge"]').should('not.have.attr', 'content');
            cy.get('[data-testid="successIconBadge"]').shadow().find('div').should('have.class','goa-badge badge-success icon-only');
    
            //Verify Icon exist
            cy.get('[data-testid="successIconBadge"]').shadow().find('div').find('goa-icon').should('exist');
    
        })

        it('Validate CSS Property', () => {
            cy.visit("http://localhost:4200/badge");
            cy.get('[data-testid="successIconBadge"]').should("be.visible");
            cy.get('[data-testid="successIconTextBadge"]').should("be.visible");
            
            cy.get('[data-testid="successIconTextBadge"]').shadow().find("div.goa-badge.badge-success").should(
                "have.css",
                "background-color",
                hexToRgb("#006f4c")
              );
              cy.get('[data-testid="successIconTextBadge"]').shadow().find("div.goa-badge.badge-success").should(
                "have.css",
                "color",
                hexToRgb("#ffffff")
              );
              cy.get('[data-testid="successIconBadge"]').shadow().find("div.goa-badge.badge-success.icon-only").should(
                "have.css",
                "background-color",
                hexToRgb("#006f4c")
              );
              cy.get('[data-testid="successIconBadge"]').shadow().find("div.goa-badge.badge-success.icon-only").should(
                "have.css",
                "color",
                hexToRgb("#ffffff")
              );

        })
    })

    context('Important Badge', () => {
        it('With Icon and Content', () => {
            cy.visit("http://localhost:4200/badge");
            cy.get('[data-testid="importantIconTextBadge"]').should("be.visible");
    
            cy.get('[data-testid="importantIconTextBadge"]').should('have.attr', 'type', 'important');
            cy.get('[data-testid="importantIconTextBadge"]').should('have.attr', 'content', 'Important');
            cy.get('[data-testid="importantIconTextBadge"]').should('have.attr', 'icon');
            cy.get('[data-testid="importantIconTextBadge"]').shadow().find('div').should('have.class','goa-badge badge-important');
    
            //Verify Icon exist
            cy.get('[data-testid="importantIconTextBadge"]').shadow().find('div').find('goa-icon').should('exist');
        })
    
        it('With Content Only', () => {
            cy.visit("http://localhost:4200/badge");
            cy.get('[data-testid="importantTextBadge"]').should("be.visible");
            cy.get('[data-testid="importantTextBadge"]').should('have.attr', 'type', 'important');
            cy.get('[data-testid="importantTextBadge"]').should('have.attr', 'content');
            cy.get('[data-testid="importantTextBadge"]').should('not.have.attr', 'icon');
            cy.get('[data-testid="importantTextBadge"]').should('have.attr', 'content', 'Important');
            cy.get('[data-testid="importantTextBadge"]').shadow().find('div').should('have.class','goa-badge badge-important');
    
            //Verify Text in Badge 
            cy.get('[data-testid="importantTextBadge"]').shadow().find('div').contains('.goa-badge-content', 'Important');
        })
    
        it('With Icon Only', () => {
            cy.visit("http://localhost:4200/badge");
            cy.get('[data-testid="importantIconBadge"]').should("be.visible");
            cy.get('[data-testid="importantIconBadge"]').should('have.attr', 'type', 'important');
            cy.get('[data-testid="importantIconBadge"]').should('have.attr', 'icon');
            cy.get('[data-testid="importantIconBadge"]').should('not.have.attr', 'content');
            cy.get('[data-testid="importantIconBadge"]').shadow().find('div').should('have.class','goa-badge badge-important icon-only');
    
            //Verify Icon exist
            cy.get('[data-testid="importantIconBadge"]').shadow().find('div').find('goa-icon').should('exist');
    
        })

        it('Validate Badge CSS Property', () => {
            cy.visit("http://localhost:4200/badge");
            cy.get('[data-testid="importantIconBadge"]').should("be.visible");
            cy.get('[data-testid="importantIconTextBadge"]').should("be.visible");
            
            cy.get('[data-testid="importantIconTextBadge"]').shadow().find("div.goa-badge.badge-important").should(
                "have.css",
                "background-color",
                hexToRgb("#f9ce2d") //#f9ce2d
              );
              cy.get('[data-testid="importantIconTextBadge"]').shadow().find("div.goa-badge.badge-important").should(
                "have.css",
                "color",
                hexToRgb("#333333")
              );

              cy.get('[data-testid="importantIconBadge"]').shadow().find("div.goa-badge.badge-important.icon-only").should(
                "have.css",
                "background-color",
                hexToRgb("#f9ce2d")
              );

              cy.get('[data-testid="importantIconBadge"]').shadow().find("div.goa-badge.badge-important.icon-only").should(
                "have.css",
                "color",
                hexToRgb("#333333")
              );

        })
    })

    context('Information Badge', () => {
        it('With Icon and Content', () => {
            cy.visit("http://localhost:4200/badge");
            cy.get('[data-testid="InformationIconTextBadge"]').should("be.visible");
    
            cy.get('[data-testid="InformationIconTextBadge"]').should('have.attr', 'type', 'information');
            cy.get('[data-testid="InformationIconTextBadge"]').should('have.attr', 'content', 'Information');
            cy.get('[data-testid="InformationIconTextBadge"]').should('have.attr', 'icon');
            cy.get('[data-testid="InformationIconTextBadge"]').shadow().find('div').should('have.class','goa-badge badge-information');
    
            //Verify Icon exist
            cy.get('[data-testid="InformationIconTextBadge"]').shadow().find('div').find('goa-icon').should('exist');
        })
    
        it('With Content Only', () => {
            cy.visit("http://localhost:4200/badge");
            cy.get('[data-testid="InformationTextBadge"]').should("be.visible");
            cy.get('[data-testid="InformationTextBadge"]').should('have.attr', 'type', 'information');
            cy.get('[data-testid="InformationTextBadge"]').should('have.attr', 'content');
            cy.get('[data-testid="InformationTextBadge"]').should('not.have.attr', 'icon');
            cy.get('[data-testid="InformationTextBadge"]').should('have.attr', 'content', 'Information');
            cy.get('[data-testid="InformationTextBadge"]').shadow().find('div').should('have.class','goa-badge badge-information');
    
            //Verify Text in Badge 
            cy.get('[data-testid="InformationTextBadge"]').shadow().find('div').contains('.goa-badge-content', 'Information');
        })
    
        it('With Icon Only', () => {
            cy.visit("http://localhost:4200/badge");
            cy.get('[data-testid="InformationIconBadge"]').should("be.visible");
            cy.get('[data-testid="InformationIconBadge"]').should('have.attr', 'type', 'information');
            cy.get('[data-testid="InformationIconBadge"]').should('have.attr', 'icon');
            cy.get('[data-testid="InformationIconBadge"]').should('not.have.attr', 'content');
            cy.get('[data-testid="InformationIconBadge"]').shadow().find('div').should('have.class','goa-badge badge-information icon-only');
    
            //Verify Icon exist
            cy.get('[data-testid="InformationIconBadge"]').shadow().find('div').find('goa-icon').should('exist');
    
        })

        it('Validate Badge CSS Property', () => {
            cy.visit("http://localhost:4200/badge");
            cy.get('[data-testid="InformationIconBadge"]').should("be.visible");
            cy.get('[data-testid="InformationIconTextBadge"]').should("be.visible");
            

            cy.get('[data-testid="InformationIconTextBadge"]').shadow().find("div.goa-badge.badge-information").should(
                "have.css",
                "background-color",
                hexToRgb("#f1f1f1")
              );
              cy.get('[data-testid="InformationIconTextBadge"]').shadow().find("div.goa-badge.badge-information").should(
                "have.css",
                "color",
                hexToRgb("#004a8f")
              );
              cy.get('[data-testid="InformationIconBadge"]').shadow().find("div.goa-badge.badge-information.icon-only").should(
                "have.css",
                "background-color",
                hexToRgb("#f1f1f1")
              );
              cy.get('[data-testid="InformationIconBadge"]').shadow().find("div.goa-badge.badge-information.icon-only").should(
                "have.css",
                "color",
                hexToRgb("#004a8f")
              );
            
        })
    })

    context('Emergency Badge', () => {
        it('With Icon and Content', () => {
            cy.visit("http://localhost:4200/badge");
            cy.get('[data-testid="emergencyIconTextBadge"]').should("be.visible");
    
            cy.get('[data-testid="emergencyIconTextBadge"]').should('have.attr', 'type', 'emergency');
            cy.get('[data-testid="emergencyIconTextBadge"]').should('have.attr', 'content', 'Emergency');
            cy.get('[data-testid="emergencyIconTextBadge"]').should('have.attr', 'icon');
            cy.get('[data-testid="emergencyIconTextBadge"]').shadow().find('div').should('have.class','goa-badge badge-emergency');
    
            //Verify Icon exist
            cy.get('[data-testid="emergencyIconTextBadge"]').shadow().find('div').find('goa-icon').should('exist');
        })
    
        it('With Content Only', () => {
            cy.visit("http://localhost:4200/badge");
            cy.get('[data-testid="emergencyTextBadge"]').should("be.visible");
            cy.get('[data-testid="emergencyTextBadge"]').should('have.attr', 'type', 'emergency');
            cy.get('[data-testid="emergencyTextBadge"]').should('have.attr', 'content');
            cy.get('[data-testid="emergencyTextBadge"]').should('not.have.attr', 'icon');
            cy.get('[data-testid="emergencyTextBadge"]').should('have.attr', 'content', 'Emergency');
            cy.get('[data-testid="emergencyTextBadge"]').shadow().find('div').should('have.class','goa-badge badge-emergency');
    
            //Verify Text in Badge 
            cy.get('[data-testid="emergencyTextBadge"]').shadow().find('div').contains('.goa-badge-content', 'Emergency');
        })
    
        it('With Icon Only', () => {
            cy.visit("http://localhost:4200/badge");
            cy.get('[data-testid="emergencyIconBadge"]').should("be.visible");
            cy.get('[data-testid="emergencyIconBadge"]').should('have.attr', 'type', 'emergency');
            cy.get('[data-testid="emergencyIconBadge"]').should('have.attr', 'icon');
            cy.get('[data-testid="emergencyIconBadge"]').should('not.have.attr', 'content');
            cy.get('[data-testid="emergencyIconBadge"]').shadow().find('div').should('have.class','goa-badge badge-emergency icon-only');
    
            //Verify Icon exist
            cy.get('[data-testid="emergencyIconBadge"]').shadow().find('div').find('goa-icon').should('exist');
    
        })

        it('Validate Badge CSS Property', () => {
            cy.visit("http://localhost:4200/badge");
            cy.get('[data-testid="emergencyIconBadge"]').should("be.visible");
            cy.get('[data-testid="emergencyIconTextBadge"]').should("be.visible");
            
            cy.get('[data-testid="emergencyIconTextBadge"]').shadow().find("div.goa-badge.badge-emergency").should(
                "have.css",
                "background-color",
                hexToRgb("#da291c")
              );
              cy.get('[data-testid="emergencyIconTextBadge"]').shadow().find("div.goa-badge.badge-emergency").should(
                "have.css",
                "color",
                hexToRgb("#ffffff")
              );
              cy.get('[data-testid="emergencyIconBadge"]').shadow().find("div.goa-badge.badge-emergency.icon-only").should(
                "have.css",
                "background-color",
                hexToRgb("#da291c")
              );
              cy.get('[data-testid="emergencyIconBadge"]').shadow().find("div.goa-badge.badge-emergency.icon-only").should(
                "have.css",
                "color",
                hexToRgb("#ffffff")
              );
        })
    })

    context('Dark Badge', () => {
        it('With Icon and Content', () => {
            cy.visit("http://localhost:4200/badge");
            cy.get('[data-testid="darkIconTextBadge"]').should("be.visible");
    
            cy.get('[data-testid="darkIconTextBadge"]').should('have.attr', 'type', 'dark');
            cy.get('[data-testid="darkIconTextBadge"]').should('have.attr', 'content', 'Dark');
            cy.get('[data-testid="darkIconTextBadge"]').should('have.attr', 'icon');
            cy.get('[data-testid="darkIconTextBadge"]').shadow().find('div').should('have.class','goa-badge badge-dark');
    
            //Verify Icon exist
            cy.get('[data-testid="darkIconTextBadge"]').shadow().find('div').find('goa-icon').should('exist');
        })
    
        it('With Content Only', () => {
            cy.visit("http://localhost:4200/badge");
            cy.get('[data-testid="darkTextBadge"]').should("be.visible");
            cy.get('[data-testid="darkTextBadge"]').should('have.attr', 'type', 'dark');
            cy.get('[data-testid="darkTextBadge"]').should('have.attr', 'content');
            cy.get('[data-testid="darkTextBadge"]').should('not.have.attr', 'icon');
            cy.get('[data-testid="darkTextBadge"]').should('have.attr', 'content', 'Dark');
            cy.get('[data-testid="darkTextBadge"]').shadow().find('div').should('have.class','goa-badge badge-dark');
    
            //Verify Text in Badge 
            cy.get('[data-testid="darkTextBadge"]').shadow().find('div').contains('.goa-badge-content', 'Dark');
        })
    
        it('With Icon Only', () => {
            cy.visit("http://localhost:4200/badge");
            cy.get('[data-testid="darkIconBadge"]').should("be.visible");
            cy.get('[data-testid="darkIconBadge"]').should('have.attr', 'type', 'dark');
            cy.get('[data-testid="darkIconBadge"]').should('have.attr', 'icon');
            cy.get('[data-testid="darkIconBadge"]').should('not.have.attr', 'content');
            cy.get('[data-testid="darkIconBadge"]').shadow().find('div').should('have.class','goa-badge badge-dark icon-only');
    
            //Verify Icon exist
            cy.get('[data-testid="darkIconBadge"]').shadow().find('div').find('goa-icon').should('exist');
    
        })

        it('Validate Badge CSS Property', () => {
            cy.visit("http://localhost:4200/badge");
            cy.get('[data-testid="darkIconBadge"]').should("be.visible");
            cy.get('[data-testid="darkIconTextBadge"]').should("be.visible");
            
            cy.get('[data-testid="darkIconTextBadge"]').shadow().find("div.goa-badge.badge-dark").should(
                "have.css",
                "background-color",
                hexToRgb("#333333")
              );
              cy.get('[data-testid="darkIconTextBadge"]').shadow().find("div.goa-badge.badge-dark").should(
                "have.css",
                "color",
                hexToRgb("#ffffff")
              );
              cy.get('[data-testid="darkIconBadge"]').shadow().find("div.goa-badge.badge-dark.icon-only").should(
                "have.css",
                "background-color",
                hexToRgb("#333333")
              );
              cy.get('[data-testid="darkIconBadge"]').shadow().find("div.goa-badge.badge-dark.icon-only").should(
                "have.css",
                "color",
                hexToRgb("#ffffff")
              );

        })
    })

    context('Midtone Badge', () => {
        it('With Icon and Content', () => {
            cy.visit("http://localhost:4200/badge");
            cy.get('[data-testid="midtoneIconTextBadge"]').should("be.visible");
    
            cy.get('[data-testid="midtoneIconTextBadge"]').should('have.attr', 'type', 'midtone');
            cy.get('[data-testid="midtoneIconTextBadge"]').should('have.attr', 'content', 'Midtone');
            cy.get('[data-testid="midtoneIconTextBadge"]').should('have.attr', 'icon');
            cy.get('[data-testid="midtoneIconTextBadge"]').shadow().find('div').should('have.class','goa-badge badge-midtone');
    
            //Verify Icon exist
            cy.get('[data-testid="midtoneIconTextBadge"]').shadow().find('div').find('goa-icon').should('exist');
        })
    
        it('With Content Only', () => {
            cy.visit("http://localhost:4200/badge");
            cy.get('[data-testid="midtoneTextBadge"]').should("be.visible");
            cy.get('[data-testid="midtoneTextBadge"]').should('have.attr', 'type', 'midtone');
            cy.get('[data-testid="midtoneTextBadge"]').should('have.attr', 'content');
            cy.get('[data-testid="midtoneTextBadge"]').should('not.have.attr', 'icon');
            cy.get('[data-testid="midtoneTextBadge"]').should('have.attr', 'content', 'Midtone');
            cy.get('[data-testid="midtoneTextBadge"]').shadow().find('div').should('have.class','goa-badge badge-midtone');
    
            //Verify Text in Badge 
            cy.get('[data-testid="midtoneTextBadge"]').shadow().find('div').contains('.goa-badge-content', 'Midtone');
        })
    
        it('With Icon Only', () => {
            cy.visit("http://localhost:4200/badge");
            cy.get('[data-testid="midtoneIconBadge"]').should("be.visible");
            cy.get('[data-testid="midtoneIconBadge"]').should('have.attr', 'type', 'midtone');
            cy.get('[data-testid="midtoneIconBadge"]').should('have.attr', 'icon');
            cy.get('[data-testid="midtoneIconBadge"]').should('not.have.attr', 'content');
            cy.get('[data-testid="midtoneIconBadge"]').shadow().find('div').should('have.class','goa-badge badge-midtone icon-only');
    
            //Verify Icon exist
            cy.get('[data-testid="midtoneIconBadge"]').shadow().find('div').find('goa-icon').should('exist');
    
        })

        it('Validate Badge CSS Property', () => {
            cy.visit("http://localhost:4200/badge");
            cy.get('[data-testid="midtoneIconBadge"]').should("be.visible");
            cy.get('[data-testid="midtoneIconTextBadge"]').should("be.visible");
            
            cy.get('[data-testid="midtoneIconTextBadge"]').shadow().find("div.goa-badge.badge-midtone").should(
                "have.css",
                "background-color",
                hexToRgb("#666666")
              );
              cy.get('[data-testid="midtoneIconTextBadge"]').shadow().find("div.goa-badge.badge-midtone").should(
                "have.css",
                "color",
                hexToRgb("#ffffff")
              );
              cy.get('[data-testid="midtoneIconBadge"]').shadow().find("div.goa-badge.badge-midtone.icon-only").should(
                "have.css",
                "background-color",
                hexToRgb("#666666")
              );
              cy.get('[data-testid="midtoneIconBadge"]').shadow().find("div.goa-badge.badge-midtone.icon-only").should(
                "have.css",
                "color",
                hexToRgb("#ffffff")
              );

        })
    })
    
    context('Light Badge', () => {
        it('With Icon and Content', () => {
            cy.visit("http://localhost:4200/badge");
            cy.get('[data-testid="lightIconTextBadge"]').should("be.visible");
    
            cy.get('[data-testid="lightIconTextBadge"]').should('have.attr', 'type', 'light');
            cy.get('[data-testid="lightIconTextBadge"]').should('have.attr', 'content', 'Light');
            cy.get('[data-testid="lightIconTextBadge"]').should('have.attr', 'icon');
            cy.get('[data-testid="lightIconTextBadge"]').shadow().find('div').should('have.class','goa-badge badge-light');
    
            //Verify Icon exist
            cy.get('[data-testid="lightIconTextBadge"]').shadow().find('div').find('goa-icon').should('exist');
        })
    
        it('With Content Only', () => {
            cy.visit("http://localhost:4200/badge");
            cy.get('[data-testid="lightTextBadge"]').should("be.visible");
            cy.get('[data-testid="lightTextBadge"]').should('have.attr', 'type', 'light');
            cy.get('[data-testid="lightTextBadge"]').should('have.attr', 'content');
            cy.get('[data-testid="lightTextBadge"]').should('not.have.attr', 'icon');
            cy.get('[data-testid="lightTextBadge"]').should('have.attr', 'content', 'Light');
            cy.get('[data-testid="lightTextBadge"]').shadow().find('div').should('have.class','goa-badge badge-light');
    
            //Verify Text in Badge 
            cy.get('[data-testid="lightTextBadge"]').shadow().find('div').contains('.goa-badge-content', 'Light');
        })
    
        it('With Icon Only', () => {
            cy.visit("http://localhost:4200/badge");
            cy.get('[data-testid="lightIconBadge"]').should("be.visible");
            cy.get('[data-testid="lightIconBadge"]').should('have.attr', 'type', 'light');
            cy.get('[data-testid="lightIconBadge"]').should('have.attr', 'icon');
            cy.get('[data-testid="lightIconBadge"]').should('not.have.attr', 'content');
            cy.get('[data-testid="lightIconBadge"]').shadow().find('div').should('have.class','goa-badge badge-light icon-only');
    
            //Verify Icon exist
            cy.get('[data-testid="lightIconBadge"]').shadow().find('div').find('goa-icon').should('exist');
    
        })

        it('Validate Badge CSS Property', () => {
            cy.visit("http://localhost:4200/badge");
            cy.get('[data-testid="lightIconBadge"]').should("be.visible");
            cy.get('[data-testid="lightIconTextBadge"]').should("be.visible");
    
            cy.get('[data-testid="lightIconTextBadge"]').shadow().find("div.goa-badge.badge-light").should(
                "have.css",
                "background-color",
                hexToRgb("#ffffff")
              );
              cy.get('[data-testid="lightIconTextBadge"]').shadow().find("div.goa-badge.badge-light").should(
                "have.css",
                "color",
                hexToRgb("#333333")
              );
              cy.get('[data-testid="lightIconBadge"]').shadow().find("div.goa-badge.badge-light.icon-only").should(
                "have.css",
                "background-color",
                hexToRgb("#ffffff")
              );
              cy.get('[data-testid="lightIconBadge"]').shadow().find("div.goa-badge.badge-light.icon-only").should(
                "have.css",
                "color",
                hexToRgb("#333333")
              );
        })
    })

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