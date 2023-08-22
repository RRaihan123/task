it('e2e Testing of the App using Cypress', () => {
        cy.visit('http://localhost:3000/') // first visit 'http://localhost:3000/'
        cy.get('input[name="username"]').type('abcd') // type 'abcd' as username
        cy.get('input[name="password"]').type('1234') // type '1234' as password
        cy.get('button').click() // clicked on login button
        cy.get('h3').should('have.text', 'Login Successful') // "Login Successful" is the expectation as both (username and password) are correct
})
