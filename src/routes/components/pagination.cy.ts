

describe('Pagination Component', () => {
    
    it('Initail Value exist for Dropdown in Pagination', () => {

        cy.visit("http://localhost:4200/pagination");
        cy.get("[data-testid='paginationDropdown']").should("be.visible");

        //Verifying Dropdown existence
        cy.get("[data-testid='paginationDropdown']").shadow().find("[data-testid='page-selector']")
                                                .find("goa-dropdown").shadow().find('[data-testid="option-list"]').find('.dropdown-input-group')
                                                .should("exist");

        //Value for dropdown should be 1
        cy.get("[data-testid='paginationDropdown']").shadow().find("[data-testid='page-selector']")
                                                .find("goa-dropdown").shadow().find('[data-testid="option-list"]').find('.dropdown-input-group input')
                                                .invoke('val').should('eq', '1');
                                                
                                                // .then((inputValue) => {
                                                //     console.log("Dropdown Value: ",inputValue);
                                                // });                                     
    
    });
  })