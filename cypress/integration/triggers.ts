/** @format */
///<reference types='Cypress'/>
describe('suit', () => {
	beforeEach(() => {
		cy.visit('cypress/index.html');
	});

	it('cypress trigger', () => {
		cy.get('.button-get').trigger('mouseover');

		cy.get('.button-get').trigger('mousedown');

		cy.wait(5000);

		cy.get('.button-get').trigger('mouseup');

		// cy.get('#inputEmail').blur();
	});
});
