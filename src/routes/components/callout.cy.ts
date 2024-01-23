
describe('Callout Component', () => {
    
    context('Information Callout', () => {
        it('Validate Information Callout CSS', () => {
            cy.visit("http://localhost:4200/callout");
            cy.get('[data-testid="InformationCallout"]').should("be.visible");
            cy.get('[data-testid="InformationCallout"]').should('have.attr', 'type', 'information');

            cy.get('[data-testid="InformationCallout"]').shadow().find('div').find('span').eq(0).should('have.class','icon information')
            cy.get('[data-testid="InformationCallout"]').shadow().find('div').find('span').eq(1).should('have.class','content')
        })
        
        it('Large Callout Size', () => {
            cy.visit("http://localhost:4200/callout");
            cy.get('[data-testid="InformationCallout"]').should("be.visible");
            cy.get('[data-testid="InformationCallout"]').should('have.attr', 'type', 'information');
            cy.get('[data-testid="InformationCallout"]').shadow().find('div').should('have.class', 'notification')
        })
        it('Medium Callout Size', () => {
            cy.visit("http://localhost:4200/callout");
            cy.get('[data-testid="InformationMediumCallout"]').should("be.visible");
            cy.get('[data-testid="InformationMediumCallout"]').should('have.attr', 'type', 'information');
            cy.get('[data-testid="InformationMediumCallout"]').shadow().find('div').should('have.class', 'notification medium')
        })
    })

    context('Emergency Callout', () => {
        it('Validate Information Callout CSS', () => {
            cy.visit("http://localhost:4200/callout");
            cy.get('[data-testid="EmergencyCallout"]').should("be.visible");
            cy.get('[data-testid="EmergencyCallout"]').should('have.attr', 'type', 'emergency');

            cy.get('[data-testid="EmergencyCallout"]').shadow().find('div').find('span').eq(0).should('have.class','icon emergency')
            cy.get('[data-testid="EmergencyCallout"]').shadow().find('div').find('span').eq(1).should('have.class','content')
        })
        
        it('Large Callout Size', () => {
            cy.visit("http://localhost:4200/callout");
            cy.get('[data-testid="EmergencyCallout"]').should("be.visible");
            cy.get('[data-testid="EmergencyCallout"]').should('have.attr', 'type', 'emergency');
            cy.get('[data-testid="EmergencyCallout"]').shadow().find('div').should('have.class', 'notification')
        })
        it('Medium Callout Size', () => {
            cy.visit("http://localhost:4200/callout");
            cy.get('[data-testid="EmergencyMediumCallout"]').should("be.visible");
            cy.get('[data-testid="EmergencyMediumCallout"]').should('have.attr', 'type', 'emergency');
            cy.get('[data-testid="EmergencyMediumCallout"]').shadow().find('div').should('have.class', 'notification medium')
        })
    })

    context('Important Callout', () => {
        it('Validate Information Callout CSS', () => {
            cy.visit("http://localhost:4200/callout");
            cy.get('[data-testid="ImportantCallout"]').should("be.visible");
            cy.get('[data-testid="ImportantCallout"]').should('have.attr', 'type', 'important');

            cy.get('[data-testid="ImportantCallout"]').shadow().find('div').find('span').eq(0).should('have.class','icon important')
            cy.get('[data-testid="ImportantCallout"]').shadow().find('div').find('span').eq(1).should('have.class','content')
        })
        
        it('Large Callout Size', () => {
            cy.visit("http://localhost:4200/callout");
            cy.get('[data-testid="ImportantCallout"]').should("be.visible");
            cy.get('[data-testid="ImportantCallout"]').should('have.attr', 'type', 'important');
            cy.get('[data-testid="ImportantCallout"]').shadow().find('div').should('have.class', 'notification')
        })
        it('Medium Callout Size', () => {
            cy.visit("http://localhost:4200/callout");
            cy.get('[data-testid="ImportantMediumCallout"]').should("be.visible");
            cy.get('[data-testid="ImportantMediumCallout"]').should('have.attr', 'type', 'important');
            cy.get('[data-testid="ImportantMediumCallout"]').shadow().find('div').should('have.class', 'notification medium')
        })
    })

    context('Success Callout', () => {
        it('Validate Information Callout CSS', () => {
            cy.visit("http://localhost:4200/callout");
            cy.get('[data-testid="SuccessCallout"]').should("be.visible");
            cy.get('[data-testid="SuccessCallout"]').should('have.attr', 'type', 'success');

            cy.get('[data-testid="SuccessCallout"]').shadow().find('div').find('span').eq(0).should('have.class','icon success')
            cy.get('[data-testid="SuccessCallout"]').shadow().find('div').find('span').eq(1).should('have.class','content')
        })
        
        it('Large Callout Size', () => {
            cy.visit("http://localhost:4200/callout");
            cy.get('[data-testid="SuccessCallout"]').should("be.visible");
            cy.get('[data-testid="SuccessCallout"]').should('have.attr', 'type', 'success');
            cy.get('[data-testid="SuccessCallout"]').shadow().find('div').should('have.class', 'notification')
        })
        it('Medium Callout Size', () => {
            cy.visit("http://localhost:4200/callout");
            cy.get('[data-testid="SuccessMediumCallout"]').should("be.visible");
            cy.get('[data-testid="SuccessMediumCallout"]').should('have.attr', 'type', 'success');
            cy.get('[data-testid="SuccessMediumCallout"]').shadow().find('div').should('have.class', 'notification medium')
        })
    })

    context('Events Callout', () => {
        it('Validate Information Callout CSS', () => {
            cy.visit("http://localhost:4200/callout");
            cy.get('[data-testid="EventsCallout"]').should("be.visible");
            cy.get('[data-testid="EventsCallout"]').should('have.attr', 'type', 'event');

            cy.get('[data-testid="EventsCallout"]').shadow().find('div').find('span').eq(0).should('have.class','icon event')
            cy.get('[data-testid="EventsCallout"]').shadow().find('div').find('span').eq(1).should('have.class','content')
        })
        
        it('Large Callout Size', () => {
            cy.visit("http://localhost:4200/callout");
            cy.get('[data-testid="EventsCallout"]').should("be.visible");
            cy.get('[data-testid="EventsCallout"]').should('have.attr', 'type', 'event');
            cy.get('[data-testid="EventsCallout"]').shadow().find('div').should('have.class', 'notification')
        })
        it('Medium Callout Size', () => {
            cy.visit("http://localhost:4200/callout");
            cy.get('[data-testid="EventsMediumCallout"]').should("be.visible");
            cy.get('[data-testid="EventsMediumCallout"]').should('have.attr', 'type', 'event');
            cy.get('[data-testid="EventsMediumCallout"]').shadow().find('div').should('have.class', 'notification medium')
        })
    })
})
