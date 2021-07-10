/** @format */
///<reference types='Cypress'/>

describe('suit', () => {
	beforeEach(() => {
		cy.visit('cypress/index.html');
		cy.url().as('url');
		// cy.fixture('user').as('user');
		cy.fixture('user')
			.then((user) => {
				user.email = 'test1@gmail.com';
				user.password = '54321';
			})
			.as('user');
		cy.readFile('./public/example.txt');
	});
	it('cypress fixture 1', () => {
		cy.get('@user').then(({ email, password }) => {
			cy.get('#inputEmail').type(email);
			cy.get('#inputPassword').type(password);
		});
	});
	it('cypress fixture 2', () => {
		cy.get('@user').then((user) => cy.log(user));
	});
});
