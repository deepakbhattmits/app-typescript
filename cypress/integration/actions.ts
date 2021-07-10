/** @format */
///<reference types='Cypress'/>
describe('suit', () => {
	beforeEach(() => {
		cy.visit('cypress/index.html');
	});
	it('css selector', () => {
		// cy.get('.course-list .list1');
		// cy.get('.country-list').children('.list1');
		cy.get('li').first();
		cy.get('li').last();
		cy.get('li').eq(2);
		cy.get('.course-list li').filter('.web');

		cy.get('.course-list .list1').next();
		cy.get('.course-list .list3').prev();
		cy.get('.course-list .list2').nextAll();

		cy.get('.course-list .list2').nextUntil('.list7');

		cy.get('.course-list .list3').prevAll();

		cy.get('.course-list .list7').prevUntil('.list3');

		cy.contains('Selenium');

		cy.get('[name="Selenium"]');
		// cy.get('h3', { timeout: 30000 });
	});
	it('cypress actions', () => {
		// cy.get('.invoice-button').click({ multiple: true });

		// cy.get('#inputEmail').type('example@gmail.com', { delay: 1000 });

		cy.get('#inputEmail').type('{ctrl}test');
	});
	it('cypress type and click', () => {
		cy.get('[data-cy="email"]').type('test@test.com');
		cy.get('[data-cy="password"]').type('123@123');
		cy.get('.custom-login').click();
	});
	it('cypress select', () => {
		// cy.get('#courses').select('course2'); // select via option
		cy.get('#courses').select('wdio'); // select via display value
	});
	it('cypress check', () => {
		cy.get('[type="checkbox"]').check(['Banana', 'Nuts']); //2 out of 4 checkboxes
		// cy.get('#Tester').check();
		// cy.get('#Nuts').uncheck();
		// cy.get('#Tester').uncheck();
	});

	it('cypress clear', () => {
		cy.get('[data-cy="email"]').type('test@test.com');
		cy.get('[data-cy="email"]').clear();
	});

	it('cypress rightclick and doubleclick', () => {
		cy.get('.button-get').dblclick();

		cy.get('.button-get').rightclick();
	});

	it('cypress blur/foucs', () => {
		cy.get('#inputEmail').focus();

		// cy.get('#inputEmail').blur();
	});
});
