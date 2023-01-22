export const clickButtonL = (string) => {
  let k = 0;
  for (let i = 1; i < 18; i += 2) {
    string = "#btn" + i;
    cy.get(string).click();
    string = "#btn" + String(i + 1);
    // } else if (strana == "Desno") {
    //   string = "#btn" + String(i - 1);
    // }
    cy.get(string).click();
    let result = ".resultTest" + String((i + 1) / 2);
    cy.isItSame(string, result);
    k++;
  }
  return k;
};
export const clickButtonR = (string) => {
  let k = 0;
  for (let i = 2; i < 18; i += 2) {
    string = "#btn" + i;
    cy.get(string).click();
    string = "#btn" + String(i - 1);
    cy.get(string).click();
    let result = ".resultTest" + String((i + 1) / 2);
    cy.isItSame(string, result);
    k++;
  }
  return k;
};
export const readMyMind = (btn, x) => {
  cy.get(btn).click();
  cy.wait(1000);
  resultCheck(x);
};
export const resultCheck = (sum) => {
  switch (sum) {
    case (0, 1):
      {
        cy.get("#recHeader").should("have.text", "Avocado Benedict");
        cy.get(".card-img-top[src='images/breakfast-6.jpg']").should(
          "be.visible"
        );
      }
      break;
    case (2, 3):
      {
        cy.get("#recHeader").should("have.text", "Strawberry Sundae");
        cy.get(".card-img-top[src='images/dessert-2.jpg']").should(
          "be.visible"
        );
      }
      break;
    case (4, 5):
      {
        cy.get("#recHeader").should("have.text", "Soy Salmon");
        cy.get(".card-img-top[src='images/dinner-4.jpg']").should("be.visible");
      }
      break;
    case (6, 7):
      {
        cy.get("#recHeader").should("have.text", "Culiflower Dipper");
        cy.get(".card-img-top[src='images/lunch-3.jpg']").should("be.visible");
      }
      break;
    case (8, 9):
      {
        cy.get("#recHeader").should("have.text", "Blonde");
        cy.get(".card-img-top[src='images/menu-1.jpg']").should("be.visible");
      }
      break;
  }
};
export const resultClicker = (string, k) => {
  let i, x;
  for (i = 1; i < k * 2 + 1; i += 2) {
    string = "#btn" + i;
    cy.get(string).click();
    x++;
  }
  for (i; i < 18; i += 2) {
    string = "#btn" + String(i + 1);
    cy.get(string).click();
  }
  return x;
};
export const randomClicker = () => {
  let x = 0;
  for (let i = 1; i < 18; i += 2) {
    let k = i + Math.round(Math.random());
    let string = "#btn" + k;
    cy.get(string).click();
    if (k % 2 == 1) {
      x++;
    }
  }
  return x;
};
