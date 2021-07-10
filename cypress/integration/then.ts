/** @format */
///<reference types='Cypress'/>
describe('suit', () => {
	beforeEach(() => {
		cy.visit('cypress/index.html');
	});

	it('cypress then and expect', () => {
		const courses = [
			{ id: 1, title: 'Cypress' },
			{
				id: 2,
				text: 'Selenium',
			},
			{ id: 3, text: 'Apium' },
		];
		cy.wrap(courses).then((courses) => {
			expect(courses).to.have.length(3);
			expect(courses[0].title).to.contains('Cypress');
		});
		cy.url().then((url) => {
			expect(url).to.contains('index.html');
		});
	});
});
