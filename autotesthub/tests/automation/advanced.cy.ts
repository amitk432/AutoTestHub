describe('Advanced Features', () => {

    it('should handle drag and drop', () => {
        cy.visit('/drag-drop');
        const dataTransfer = new DataTransfer();

        cy.get('#draggable').trigger('dragstart', {
            dataTransfer
        });

        cy.get('#dropzone').trigger('drop', {
            dataTransfer
        });

        cy.get('#success-message').should('be.visible').and('contain', 'Success');
    });

    it('should verify dynamic table data', () => {
        cy.visit('/tables');
        cy.get('#loading').should('be.visible');
        cy.get('#user-table', { timeout: 10000 }).should('be.visible');
        cy.get('tbody tr').should('have.length', 5);
        cy.contains('Alice Johnson').should('be.visible');
    });

    it('should interact with complex forms', () => {
        cy.visit('/forms');
        cy.get('#name').type('John Doe');
        cy.get('#experience').invoke('val', 10).trigger('change');
        cy.get('#date').type('2023-01-01');

        const stub = cy.stub();
        cy.on('window:alert', stub);

        cy.contains('Submit Application').click().then(() => {
            expect(stub.getCall(0)).to.be.called;
        });
    });

    it('should access shadow dom elements', () => {
        cy.visit('/shadow-dom');
        cy.get('#shadow-host').shadow().find('#shadow-btn').click();
    });

});
