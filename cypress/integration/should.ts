/** @format */
///<reference types='Cypress'/>
describe('suit', () => {
	beforeEach(() => {
		cy.visit('cypress/index.html');
	});

	it('cypress should have text', () => {
		cy.get('.course-list .list1').should('have.text', 'Cypress');
	});
	it('cypress should be or not be visible', () => {
		// cy.get('.course-list .list9').should('have.text', 'react');
		cy.get('.course-list .list9').should('not.be.visible');
	});
	it('cypress should have class', () => {
		cy.get('.course-list .list1').should('have.class', 'web');
	});
	it('should have css', () => {
		// cy.get('.button-get')
		// 	.trigger('mouseover')
		// 	.should('have.css', 'background-color', 'rgb(255, 0, 0)');

		cy.get('.button-get')
			.trigger('mouseover')
			.should('have.css', 'background-color')
			.and('eql', 'rgb(255, 0, 0)');

		cy.wait(1000);

		cy.get('.button-get')
			.trigger('mouseup')
			.should('have.css', { backgroundColor: 'rgb(0, 123, 255)' });

		// cy.get('#inputEmail').blur();
	});
	it('Should enable/disable of a input box', () => {
		cy.get('#inputEmail').should('be.enabled');
		cy.get('#inputName').should('be.disabled');
	});
	it('Should have a attribute in the element', () => {
		cy.get('#inputName').should('have.attr', 'data-cy').and('eql', 'name');
	});
	it('Should have a value in the element', () => {
		cy.get('#inputEmail').type('deepak').should('have.value', 'deepak');
	});
	it('Should have selected, focused, checked', () => {
		cy.get('#courses').select('course4').should('have.value', 'course4');
		cy.get('#Fries').check().should('be.checked').and('have.value', 'Fries');
		cy.get('#inputOp').focus().should('be.focused');
		cy.get('#inputOp').blur().should('not.be.focused');
	});
});
