Cypress.Commands.add("openFromMain", (string) => {
  cy.visit("http://10.15.1.204:3000/");
  cy.get(`.nav-link[href='/${string}']`).click();
  cy.wait(2000);
  cy.title().should("eq", "QA Exam Kitchen");
  cy.url().should("include", string);
});
Cypress.Commands.add("openPage", (string) => {
  cy.visit(`/${string}`);
  cy.wait(2000);
});
//ZADATAK 1
Cypress.Commands.add("checkRadioButton", (name) => {
  cy.get(name)
    .should("be.visible")
    .should("be.enabled")
    .should("not.be.checked")
    .check();
});

Cypress.Commands.add("checkUncheck", function (a) {
  cy.get(a)
    .should("be.visible")
    .should("be.enabled")
    .should("not.be.checked")
    .check()
    .uncheck();
});
Cypress.Commands.add("typeVisEn", function (get, type) {
  cy.get(get).should("be.visible").should("be.enabled").type(type);
});
Cypress.Commands.add("localStorageCheck", function (key, string) {
  cy.window()
    .its("localStorage")
    .invoke("getItem", key)
    .should("be.equal", string);
});
Cypress.Commands.add("isItSame", function (button, field) {
  cy.get(button).then(($btn) => {
    const txt = $btn.text();
    cy.get(field).should(($rID) => {
      expect($btn.text()).to.eq(txt);
    });
  });
});
