/** @format */
///<reference types='Cypress'/>
describe('suit', () => {
	beforeEach(() => {
		cy.visit('cypress/index.html');
	});

	it('cypress title', () => {
		cy.title().should('eql', 'Cypress Tutorials');
	});
	it('cypress title', () => {
		cy.contains('About').click();
		cy.go('back');
		cy.go('forward');
	});
});
