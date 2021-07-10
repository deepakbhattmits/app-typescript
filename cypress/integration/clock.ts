/** @format */
///<reference types='Cypress'/>
describe('suit', () => {
	it('cypress clock', () => {
		const now = new Date(2019, 1, 19);
		cy.clock(now);

		cy.visit('cypress/index.html');
	});
});
