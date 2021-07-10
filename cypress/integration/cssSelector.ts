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
});
