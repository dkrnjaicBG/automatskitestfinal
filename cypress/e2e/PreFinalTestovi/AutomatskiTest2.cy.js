//PROBA T2
describe("DrugiZadatak", () => {
  beforeEach(() => {
    cy.viewport(1920, 1080);
  });
  let randomBr;
  let randomString;
  //--------------Otvaranje zadatka--------------------//
  it("Otvori stranicu", function () {
    cy.visit("http://10.15.1.204:3000/");
    cy.get(".nav-link[href='/questionaire']").click();
    cy.wait(1000);
    cy.title().should("eq", "QA Exam Kitchen");
    cy.url().should("include", "questionaire");
  });
  //----------------------SVE LEVO KLIKTANJE--------------------//
  it("Levi button test", function () {
    cy.visit("http://10.15.1.204:3000/questionaire");
    cy.wait(1000);
    for (randomBr = 1; randomBr < 18; randomBr += 2) {
      randomString = "#btn" + randomBr;
      cy.get(randomString).click();
      randomString = "#btn" + String(randomBr + 1);
      cy.get(randomString).click();
      let resultID = ".resultTest" + String((randomBr + 1) / 2);
      switch (randomString) {
        case "#btn1":
          cy.get(resultID).should("have.text", "Leto");
          break;
        case "#btn3":
          cy.get(resultID).should("have.text", "Caj");
          break;
        case "#btn5":
          cy.get(resultID).should("have.text", "Bel");
          break;
        case "#btn7":
          cy.get(resultID).should("have.text", "Slatko");
          break;
        case "#btn9":
          cy.get(resultID).should("have.text", "Kiselo");
          break;
        case "#btn11":
          cy.get(resultID).should("have.text", "Kasika");
          break;
        case "#btn13":
          cy.get(resultID).should("have.text", "Duboki");
          break;
        case "#btn15":
          cy.get(resultID).should("have.text", "Voce");
          break;
        case "#btn17":
          cy.get(resultID).should("have.text", "Koktel");
          break;
      }
    }

    cy.wait(1000);
  });
  //-------------------------SVE DESNO KLIKTANJE---------------------------//
  it("Desni button test", function () {
    cy.visit("http://10.15.1.204:3000/questionaire");
    cy.wait(1000);

    for (randomBr = 2; randomBr <= 18; randomBr += 2) {
      randomString = "#btn" + randomBr;
      cy.get(randomString).click();
      randomString = "#btn" + String(randomBr - 1);
      let resultID = ".resultTest" + String((randomBr + 1) / 2);
      switch (randomString) {
        case "#btn2":
          cy.get(resultID).should("have.text", "Zima");
          break;
        case "#btn4":
          cy.get(resultID).should("have.text", "Kafa");
          break;
        case "#btn6":
          cy.get(resultID).should("have.text", "Crno");
          break;
        case "#btn8":
          cy.get(resultID).should("have.text", "Slano");
          break;
        case "#btn10":
          cy.get(resultID).should("have.text", "Ljuto");
          break;
        case "#btn12":
          cy.get(resultID).should("have.text", "Viljuska");
          break;
        case "#btn14":
          cy.get(resultID).should("have.text", "Plitki");
          break;
        case "#btn16":
          cy.get(resultID).should("have.text", "Povrce");
          break;
        case "#btn18":
          cy.get(resultID).should("have.text", "Pivo");
          break;
      }
    }

    cy.wait(1000);
  });
  //--------------------------------SVE KOMBINACIJE SLIKA I TEKSTA---------//
  const NUM_OF_ANSWERS = 10;
  Cypress._.times(NUM_OF_ANSWERS, (k) => {
    it("Test za zbir " + String(k + 1), function () {
      cy.visit("http://10.15.1.204:3000/questionaire");
      cy.wait(1000);
      let x = 0;
      for (randomBr = 1; randomBr < k * 2 + 1; randomBr += 2) {
        randomString = "#btn" + randomBr;
        cy.get(randomString).click();
        x++;
      }
      for (randomBr; randomBr <= 18; randomBr += 2) {
        randomString = "#btn" + String(randomBr + 1);
        cy.get(randomString).click();
      }
      cy.get("#readmymind").click();
      cy.wait(1000);
      console.log("ovo je k=", k);
      console.log("ovo je x=", x);
      switch (x) {
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
            cy.get(".card-img-top[src='images/dinner-4.jpg']").should(
              "be.visible"
            );
          }
          break;
        case (6, 7):
          {
            cy.get("#recHeader").should("have.text", "Culiflower Dipper");
            cy.get(".card-img-top[src='images/lunch-3.jpg']").should(
              "be.visible"
            );
          }
          break;
        case (8, 9):
          {
            cy.get("#recHeader").should("have.text", "Blonde");
            cy.get(".card-img-top[src='images/menu-1.jpg']").should(
              "be.visible"
            );
          }
          break;
      }
    });
  });
  //-------------------------------RANDOM-----------------------------------//
  it("Klikni random dugme", function () {
    cy.visit("http://10.15.1.204:3000/questionaire");
    cy.wait(1000);
    let x = 0;
    for (randomBr = 1; randomBr < 18; randomBr += 2) {
      let k = randomBr + Math.round(Math.random());
      randomString = "#btn" + k;
      cy.get(randomString).click();
      if (k % 2 == 1) {
        x++;
      }
    }
    cy.get("#readmymind").click();
    cy.wait(1000);
    switch (x) {
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
          cy.get(".card-img-top[src='images/dinner-4.jpg']").should(
            "be.visible"
          );
        }
        break;
      case (6, 7):
        {
          cy.get("#recHeader").should("have.text", "Culiflower Dipper");
          cy.get(".card-img-top[src='images/lunch-3.jpg']").should(
            "be.visible"
          );
        }
        break;
      case (8, 9):
        {
          cy.get("#recHeader").should("have.text", "Blonde");
          cy.get(".card-img-top[src='images/menu-1.jpg']").should("be.visible");
        }
        break;
    }
  });
});
