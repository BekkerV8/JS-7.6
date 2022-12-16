Cypress.Commands.add("login", (email, password) => {
  cy.contains("Log in").click();
  cy.get("#mail").type(email);
  cy.get("#pass").type(password);
  cy.contains("Submit").click();
});

Cypress.Commands.add("createBook", (bookname, authorsname) => {
  cy.get(".p-0 > .btn").click();
  cy.get("#title").type(bookname);
  cy.get("#authors").type(authorsname);
  cy.contains("Submit").click();
});
