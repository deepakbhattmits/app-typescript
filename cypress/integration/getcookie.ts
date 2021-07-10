/** @format */
///<reference types='Cypress'/>
describe('suit', () => {
	beforeEach(() => {
		cy.visit('cypress/index.html');
	});

	it('cypress getCookie', () => {
		cy.getCookie('username')
			.should('have.property', 'value')
			.and('eql', 'Deepak');
		cy.setCookie('token', '12345678')
			.should('have.property', 'value')
			.and('eql', '12345678');
		cy.getCookies().should('have.length', 2);
	});
	it('cypress getCookie 1', () => {
		cy.getCookie('username')
			.should('have.property', 'value')
			.and('eql', 'Deepak');

		cy.getCookies().should('have.length', 1);
	});
});
