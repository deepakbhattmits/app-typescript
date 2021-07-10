/** @format */
///<reference types='Cypress'/>
describe('suit', () => {
	beforeEach(() => {
		cy.visit('cypress/index.html');
	});
	it('cypress each command', () => {
		cy.get('.feature2').each(($element) => {
			// expect($element.text()).to.contains('GB'); // jQuery way $element.text()
			cy.wrap($element).should('contain', 'GB');
		});
	});
});
