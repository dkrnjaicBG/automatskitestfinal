//TEST 3 FINAL
/// <reference types="cypress"/>

import { hasDuplicates, selectFood } from "./funkcijeT3.cy";

describe("treciTest", () => {
  let arrayFood = [];
  let arrayPrices = [];
  let arrayOrdered = [];
  before(() => {
    cy.visit("/menu");
    cy.get(".menus")
      .find(".text")
      .find(".one-half")
      .each(($value, index) => {
        arrayFood[index] = $value.text();
      });
    cy.get(".menus")
      .find(".price")
      .each(($value, index) => {
        arrayPrices[index] = $value.text();
      });
  });

  it("Open page", function () {
    cy.openFromMain("menu");
  });

  let sum = 0;
  let arrVal = [];
  it("Select food", () => {
    cy.openPage("menu").scrollTo("bottom");
    cy.viewport(1920, 2000);

    //------------------1-2--------------//
    let [a, b] = selectFood(arrayFood.slice(0, 8), arrayPrices.slice(0, 8));
    arrVal.push(b);
    sum += parseFloat(b.replace("$", ""));
    arrayOrdered.push(a);
    [a, b] = selectFood(arrayFood.slice(8, 13), arrayPrices.slice(8, 13));
    arrVal.push(b);
    sum += parseFloat(b.replace("$", ""));
    arrayOrdered.push(a);
    //-----------------3-5---------------
    [a, b] = selectFood(arrayFood, arrayPrices);
    arrVal.push(b);
    sum += parseFloat(b.replace("$", ""));
    arrayOrdered.push(a);
    [a, b] = selectFood(arrayFood, arrayPrices);
    arrVal.push(b);
    sum += parseFloat(b.replace("$", ""));
    arrayOrdered.push(a);
    [a, b] = selectFood(arrayFood, arrayPrices);
    arrVal.push(b);
    sum += parseFloat(b.replace("$", ""));
    arrayOrdered.push(a);
    //---------------6------------------------/
    if (hasDuplicates(arrayOrdered)) {
      [a, b] = selectFood(arrayOrdered, arrVal);
      arrVal.push(b);
      sum += parseFloat(b.replace("$", ""));
      arrayOrdered.push(a);
    } else {
      [a, b] = selectFood(arrayFood, arrayPrices);
      arrVal.push(b);
      sum += parseFloat(b.replace("$", ""));
      arrayOrdered.push(a);
    }
    cy.get("#ukupno").should("have.text", String(sum));
  });
});
