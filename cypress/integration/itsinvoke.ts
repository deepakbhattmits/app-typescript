/** @format */
///<reference types='Cypress'/>
describe('suit', () => {
	beforeEach(() => {
		cy.visit('cypress/index.html');
	});
	it('cypress its/invoke', () => {
		const car = {
			color: 'red',
			model: 2020,
			isNew: true,
			turnOn: function () {
				return 'car is on';
			},
		};
		cy.wrap(car).its('color');

		cy.wrap(car).invoke('turnOn');

		cy.get('.course-list li').its('length');

		cy.get('.course-list').invoke('text');

		cy.wrap(car).then((car) => {
			expect(car).to.have.property('color');
		});
	});
});
