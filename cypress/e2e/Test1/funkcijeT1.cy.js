export const allCheckboxCheckUncheck = (name, a, b) => {
  for (let i = a; i < b + 1; i++) {
    let string = name + String(i);
    cy.log(string);
    cy.checkUncheck(string);
  }
};
export const textBoxType = (textbox, fil) => {
  let string = `#name[class='form-control ${textbox}']`;
  cy.get(string).should("be.visible").should("be.enabled").type(fil);
};
export const getTodayDate = (today) => {
  let dd = Math.floor(Math.random() * 31 + 1);
  if (dd < 10) {
    dd = "0" + dd;
  }
  let mm = Math.floor(Math.random() * 12 + 1);
  if (mm < 10) {
    mm = "0" + mm;
  }
  let yyyy = today.getFullYear() + Math.floor(Math.random() * 3);
  return yyyy + "-" + mm + "-" + dd;
};
export const timeType = () => {
  let hh = Math.floor(Math.random() * 24);
  let min = Math.floor(Math.random() * 60);
  let curTime;
  if (hh < 10) {
    hh = "0" + hh;
  }
  if (min < 10) {
    min = "0" + min;
  }
  return hh + ":" + min;
};
export const dropDownChoice = (x) => {
  switch (x) {
    case 1: {
      cy.get("#persons").select("2-5").should("have.value", "1");
      return "2-5";
    }
    case 2: {
      cy.get("#persons").select("6-10").should("have.value", "2");
      return "6-10";
    }
    case 3: {
      cy.get("#persons").select("11-20").should("have.value", "3");
      return "11-20";
    }
    case 4: {
      cy.get("#persons").select("21+").should("have.value", "4");
      return "21+";
    }
  }
};
export const algChoice = (x) => {
  switch (x) {
    case 0: {
      //-------------Radio YES-------------------//
      radioButtonCheck("#alg_y", "#alg_m", "#alg_n");
      cy.get("#alg_y").should("have.value", "Yes");
      let string = "#alg";
      checkboxTrue(string);
      return "Yes";
    }
    case 1: {
      //--------------Radio NO------------------//
      cy.get("#alg_n").should("have.value", "No");
      radioButtonCheck("#alg_n", "#alg_y", "#alg_m");
      cy.get("#which").should(
        "have.class",
        "form-group grid-container disabled"
      );
      return "No";
    }
    case 2: {
      //--------------Radio Maybe------------------//
      cy.get("#alg_m").should("have.value", "Maybe");
      radioButtonCheck("#alg_m", "#alg_y", "#alg_n");
      let string = "#alg";
      checkboxTrue(string);
      return "Maybe";
    }
  }
};
export const checkboxTrue = (string) => {
  for (let i = 1; i <= 6; i++) {
    randomChecker(string + i);
  }
};
export const radioButtonCheck = (selected, first, second) => {
  cy.get(selected)
    .should("be.visible")
    .should("be.enabled")
    .should("not.be.checked")
    .check()
    .should("be.checked");
  cy.get(first).should("not.be.checked");
  cy.get(second).should("not.be.checked");
};
export const randomChecker = (name) => {
  let x = Math.round(Math.random());
  if (x == 1) {
    cy.get(name).check();
  }
};
