describe('UI Interactions', () => {
    beforeEach(() => {
        cy.visit('/');
    });

    it('should open and close modal', () => {
        cy.contains('Open Modal').click();
        cy.contains('Test Modal').should('be.visible');
        cy.contains('This is a modal dialog').should('be.visible');
        cy.contains('Close').click();
        cy.contains('Test Modal').should('not.exist');
    });

    it('should trigger alert', () => {
        const stub = cy.stub();
        cy.on('window:alert', stub);
        cy.contains('Trigger Alert').click().then(() => {
            expect(stub.getCall(0)).to.be.calledWith('This is an alert!');
        });
    });

    it('should handle button clicks', () => {
        const stub = cy.stub();
        cy.on('window:alert', stub);
        cy.contains('Click Me').click().then(() => {
            expect(stub.getCall(0)).to.be.calledWith('Clicked!');
        });
    });

    it('should have disabled button', () => {
        cy.contains('Disabled').should('be.disabled');
    });
});
