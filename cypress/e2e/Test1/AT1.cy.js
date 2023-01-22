//FINALNI TEST 1
/// <reference types="cypress"/>

import "./funkcijeT1.cy";
import {
  algChoice,
  allCheckboxCheckUncheck,
  dropDownChoice,
  getTodayDate,
  textBoxType,
  timeType,
} from "./funkcijeT1.cy";

let randomNum;
let randomString = "T " + Math.random().toString(36).substring(2);
const overview = {
  cbr: "",
  org: randomString,
  age: "",
  dtr: "",
  tmr: "",
  gur: "",
  alr: "",
  alg: [],
};
describe("prviZadatak", () => {
  //-------------promenljive za koriscenje--------------//
  //--------------Otvaranje zadatka--------------------//
  it("Open page", function () {
    cy.openFromMain("reserve");
  });
  //------------RadioButtonCheck sa YES selektovanim--------------------//
  it("Check/Uncheck Yes", function () {
    cy.openPage("reserve");
    cy.checkRadioButton("#alg_y");
    allCheckboxCheckUncheck("#alg", 1, 6);
  });
  //------------RadioButtonCkeck sa MAYBE selektovanim------------------//
  it("Check/Uncheck Maybe", function () {
    cy.openPage("reserve");
    cy.checkRadioButton("#alg_m");
    allCheckboxCheckUncheck("#alg", 1, 6);
  });
  it("Fill form", () => {
    //---------------------Random Popunjavanje forme----------------------//
    cy.openPage("reserve");
    textBoxType("org", randomString); //unos organizatora
    randomString = "T " + Math.random().toString(36).substring(2); //random novi string
    textBoxType("bp", randomString); // unos slavljenika
    overview.cbr = randomString;
    //Broj godina
    randomNum = Math.floor(Math.random() * 100 + 1); // random broj godina
    cy.typeVisEn("#age", randomNum); //unos broja godina
    overview.age = String(randomNum);
    var today = new Date();
    today = getTodayDate(today);
    overview.dtr = today;
    cy.typeVisEn("#date", today); //Unos datuma (sa mogucnoscu 3 godine unapred rezervacije)
    let curTime = timeType();
    cy.typeVisEn("#time", curTime); //Upis vremena
    overview.tmr = curTime;
    //Guests
    randomNum = Math.floor(Math.random() * 4 + 1);
    overview.gur = dropDownChoice(randomNum);
    //Alergies
    randomNum = Math.floor(Math.random() * 3);
    overview.alr = algChoice(randomNum);
    cy.get(".btn[href='#ex1']").click();
    //Overview Check
    cy.get("#orr").should("have.text", overview.org);
    cy.get("#agr").should("have.text", overview.age);
    cy.get("#tmr").should("have.text", overview.tmr);
    cy.get("#gur").should("have.text", overview.gur);
    cy.get("#alr").should("have.text", overview.alr);
    cy.get("#cbr").should("have.text", overview.cbr);
    //Local Storage Check
    cy.localStorageCheck("Organizer", overview.org);
    cy.localStorageCheck("Birthday_Person", overview.cbr);
    cy.localStorageCheck("Age", overview.age);
    cy.localStorageCheck("Date", overview.dtr);
    cy.localStorageCheck("Time", overview.tmr);
    cy.localStorageCheck("Number_Of_People", overview.gur);
  });
});
