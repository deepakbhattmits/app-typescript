/** @format */
///<reference types='Cypress'/>
describe('suit', () => {
	beforeEach(() => {
		cy.visit('cypress/index.html');
		cy.url().as('url');
	});
	it('cypress sync/async', () => {
		// cy.get('#inputOp').click();
		// cy.get('#inputOp').should('have.value', 'Clicked');

		/* this line of code will give error because expect command is from chai so this will try to execute first */
		// let currentURL = '';
		// cy.url().then(($url) => {
		// 	currentURL = $url;
		// });
		// expect(currentURL).to.contains('index.html');

		/* if we move inside then block this expect statement then it is run as expected*/
		let currentURL = '';
		cy.url().then(($url) => {
			currentURL = $url;
			expect(currentURL).to.contains('index.html');
		});
	});
	it('cypress variables 1', function () {
		cy.log(this.url);
	});
	it('cypress variables 2', function () {
		cy.log(this.url);
	});
});
