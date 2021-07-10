/** @format */
///<reference types='Cypress'/>
describe('suit', () => {
	beforeEach(() => {
		cy.visit('cypress/index.html');
	});

	it('cypress wrap', () => {
		const car = {
			color: 'red',
			model: 2020,
			isNew: true,
			turnOn: function () {
				return 'car is on';
			},
		};
		cy.wrap(car).should('have.property', 'color').and('eql', 'red');
	});
});
