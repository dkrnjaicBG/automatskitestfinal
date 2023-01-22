//FINALNI TEST 2
/// <reference types="cypress"/>
import {
  clickButtonL,
  clickButtonR,
  randomClicker,
  readMyMind,
  resultClicker,
} from "./funkcijeT2.cy";

describe("drugiZadatak", () => {
  let randomString;
  //--------------Otvaranje zadatka--------------------//
  it("Open page", function () {
    cy.openFromMain("questionaire");
  });
  //----------------------SVE LEVO KLIKTANJE (ezultat 9)----------------//
  it("All left button test", function () {
    cy.openPage("questionaire");
    let x = clickButtonL(randomString);
    readMyMind("#readmymind", x);
  });
  //-------------SVE DESNO KLIKTANJE provera rezultat 0-------------------//
  it("All right button test", function () {
    cy.openPage("questionaire");
    let x = clickButtonR(randomString);
    readMyMind("#readmymind", x);
  });
  //------------------------SVE KOMBINACIJE SLIKA I TEKSTA----------------//
  const NUM_OF_ANSWERS = 10;
  Cypress._.times(NUM_OF_ANSWERS, (k) => {
    it("Test with sum= " + String(k), function () {
      cy.openPage("questionaire");
      let x = resultClicker(randomString, k);
      readMyMind("#readmymind", x);
    });
  });
  //-------------------------------RANDOM-----------------------------------//
  it("Random test sum", function () {
    cy.openPage("questionaire");
    let x = randomClicker();
    readMyMind("#readmymind", x);
  });
});
