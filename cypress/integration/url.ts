/** @format */
///<reference types='Cypress'/>
describe('suit', () => {
	beforeEach(() => {
		cy.visit('cypress/index.html');
	});

	it('cypress url', () => {
		cy.url().should('contain', 'index.html');
	});
});
