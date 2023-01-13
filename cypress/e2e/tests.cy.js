describe("When user is on login page, user", () => {
  //тест с проверкой отображения страницы
  it("Should open the main page", () => {
    cy.visit("localhost:3000");
    cy.contains("Books list");
  });

  //авторизация
  it("Should be able to login with correct email and password", () => {
    cy.visit("localhost:3000");
    cy.login("bropet@mail.ru", "123");
    cy.contains("Добро пожаловать");
  });

  //авторизации с неверным логином
  it("Should not be able to login with empty email", () => {
    cy.visit("localhost:3000");
    cy.login("", "123");
    cy.get("#mail")
      .then(($el) => $el[0].checkValidity())
      .should("be.false");
  });

  //добавление книги
  it("Should add book", () => {
    cy.visit("localhost:3000");
    cy.login("bropet@mail.ru", "123");
    cy.contains("Add new").click();
    cy.get("#title").type("War and Peace");
    cy.get("#description").type("Роман");
    cy.get("#authors").type("Tolstoy");
    cy.get("form > .ml-2").click();
    cy.contains("Tolstoy").should("be.visible");
  });
  it("add to favorite", () => {
    cy.visit("localhost:3000");
    cy.login("bropet@mail.ru", "123");
    cy.contains("Add new").click();
    cy.get("#title").type("War and Peace");
    cy.get("#description").type("Роман");
    cy.get("#authors").type("Tolstoy");
    cy.get("#favorite").click();
    cy.get("form > .ml-2").click();
    cy.get("h4").click();
    cy.contains("Tolstoy").should("be.visible");
    // cy.contains("Добро пожаловать");
    // cy.createBook("War and Peace", "Tolstoy");
    // cy.createBook("Big Daddy", "Korolev");
    // cy.createBook("War", "Suvorov");
    // cy.get(
    //   '[href="book/771bff3c-205e-4a74-92ba-b53cd2145603"] > .h-100 > .card-footer > .btn'
    // ).click();
    // cy.get(
    //   '[href="book/93ee9675-ef6f-47c5-b40a-cbd92b062aab"] > .h-100 > .card-footer > .btn'
    // ).click();
    // cy.get("h4").click();
    // cy.contains("War and Peace");
    // cy.contains("Big Daddy");
  });

  //удаление книги из избранного
  it("Deleting a book from favorites", () => {
    cy.visit("localhost:3000");
    cy.login("bropet@mail.ru", "123");
    cy.contains("Добро пожаловать");
    cy.get("h4").click();
    cy.get(
      "#root > div > div > a:nth-child(1) > div > div.card-footer"
    ).click();
    cy.contains("Please add some book to favorit on home page!").should(
      "be.visible"
    );
  });
});
