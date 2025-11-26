describe('Authentication Flow', () => {
    it('should navigate to login page', () => {
        cy.visit('/');
        cy.contains('Login').click();
        cy.url().should('include', '/login');
        cy.contains('h1', 'Login');
    });

    it('should navigate to signup page', () => {
        cy.visit('/');
        cy.contains('Signup').click();
        cy.url().should('include', '/signup');
        cy.contains('h1', 'Sign Up');
    });

    it('should show validation error on empty login', () => {
        cy.visit('/login');
        cy.get('button[type="submit"]').click();
        cy.get('input[type="email"]').then(($input) => {
            expect(($input[0] as HTMLInputElement).checkValidity()).to.equal(false);
        });
    });
});
