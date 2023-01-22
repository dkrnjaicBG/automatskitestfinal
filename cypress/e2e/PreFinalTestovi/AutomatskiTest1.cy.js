//PROBA T1

describe("PrviZadatak", () => {
  //-------------promenljive za koriscenje--------------//
  let randomBR;
  let randomString = "T " + Math.random().toString(36).substring(2);
  const overview = {
    cbr: "",
    orr: randomString,
    arg: "",
    dtr: "",
    tmr: "",
    gur: "",
    alr: "",
  };
  //--------------Otvaranje zadatka--------------------//
  it("OtvoriStranicu", function () {
    cy.viewport(1920, 1080);
    cy.visit("http://10.15.1.204:3000/");
    cy.get(".nav-link[href='/reserve']").click();
    cy.wait(1000);
    cy.title().should("eq", "QA Exam Kitchen");
    cy.url().should("include", "reserve");
  });
  //------------RadioButtonCheckYES--------------------//
  it("PopunjavanjeForme", () => {
    cy.viewport(1920, 1080);
    cy.visit("http://10.15.1.204:3000/reserve");
    cy.wait(2000);
    //------------Unos organizatora-----------------------//
    cy.get("#name[class='form-control org']")
      .should("be.visible")
      .should("be.enabled")
      .type(randomString);
    randomString = "T " + Math.random().toString(36).substring(2);
    //-------------Unos Slavljenika------------------------//
    cy.get("#name[class='form-control bp']")
      .should("be.visible")
      .should("be.enabled")
      .type(randomString);
    overview.cbr = randomString;
    //-------------Unos datuma (sa mogucnoscu 3 godine unapred rezervacije)----------//
    randomBR = Math.floor(Math.random() * 100 + 1);
    cy.get("#age").should("be.visible").should("be.enabled").type(randomBR);
    overview.arg = String(randomBR);
    var today = new Date();
    var dd = Math.floor(Math.random() * 31 + 1);
    if (dd < 10) {
      dd = "0" + dd;
    }
    var mm = Math.floor(Math.random() * 12 + 1);
    if (mm < 10) {
      mm = "0" + mm;
    }
    var yyyy = today.getFullYear() + Math.floor(Math.random() * 3);
    today = yyyy + "-" + mm + "-" + dd;
    overview.dtr = today;
    cy.get("#date").should("be.visible").should("be.enabled").type(today);
    //-------------------------Unos satnice------------------//
    let hh = Math.floor(Math.random() * 24);
    let min = Math.floor(Math.random() * 60);
    let curTime;
    if (hh < 10) {
      hh = "0" + hh;
    }
    if (min < 10) {
      min = "0" + min;
    }
    curTime = hh + ":" + min;
    cy.get("#time").type(curTime);
    overview.tmr = curTime;

    //-------------DropDown M-------------------//
    randomBR = Math.floor(Math.random() * 4 + 1);
    switch (randomBR) {
      case 1:
        {
          cy.get("#persons").select("2-5").should("have.value", "1");
          overview.gur = "2-5";
        }
        break;
      case 2:
        {
          cy.get("#persons").select("6-10").should("have.value", "2");
          overview.gur = "6-10";
        }
        break;
      case 3:
        {
          cy.get("#persons").select("11-20").should("have.value", "3");
          overview.gur = "11-20";
        }
        break;
      case 4:
        {
          cy.get("#persons").select("21+").should("have.value", "4");
          overview.gur = "21+";
        }
        break;
    }
    randomBR = Math.floor(Math.random() * 3);
    switch (randomBR) {
      case 0:
        {
          //-------------Radio YES-------------------//
          cy.get("#alg_y")
            .should("be.visible")
            .should("be.enabled")
            .should("not.be.checked")
            .check()
            .should("be.checked")
            .and("have.value", "Yes");
          cy.get("#alg_n").should("not.be.checked");
          cy.get("#alg_m").should("not.be.checked");
          checkboxTrue();
          overview.alr = "Yes";
        }
        break;
      case 1:
        {
          //--------------Radio NO------------------//
          cy.get("#alg_n")
            .should("be.visible")
            .should("be.enabled")
            .should("not.be.checked")
            .check()
            .should("be.checked")
            .and("have.value", "No");
          cy.get("#alg_y").should("not.be.checked");
          cy.get("#alg_m").should("not.be.checked");
          cy.get("#which").should(
            "have.class",
            "form-group grid-container disabled"
          );
          overview.alr = "No";
        }
        break;
      case 2:
        {
          //--------------Radio Maybe------------------//
          cy.get("#alg_m")
            .should("be.visible")
            .should("be.enabled")
            .should("not.be.checked")
            .check()
            .should("be.checked")
            .and("have.value", "Maybe");
          cy.get("#alg_y").should("not.be.checked");
          cy.get("#alg_n").should("not.be.checked");
          checkboxTrue();
          overview.alr = "Maybe";
        }
        break;
    }

    cy.get(".btn[href='#ex1']").click();
    cy.get("#cbr").should("have.text", overview.cbr);
    cy.get("#orr").should("have.text", overview.orr);
    cy.get("#agr").should("have.text", overview.arg);
    cy.get("#tmr").should("have.text", overview.tmr);
    cy.get("#gur").should("have.text", overview.gur);
    cy.get("#alr").should("have.text", overview.alr);
    cy.window()
      .its("localStorage")
      .invoke("getItem", "Age")
      .should("be.equal", overview.arg);

    function checkboxTrue() {
      cy.get("#alg1")
        .should("be.visible")
        .should("be.enabled")
        .should("not.be.checked")
        .check()
        .uncheck();
      cy.get("#alg2")
        .should("be.visible")
        .should("be.enabled")
        .should("not.be.checked")
        .check()
        .uncheck();
      cy.get("#alg3")
        .should("be.visible")
        .should("be.enabled")
        .should("not.be.checked")
        .check()
        .uncheck();
      cy.get("#alg4")
        .should("be.visible")
        .should("be.enabled")
        .should("not.be.checked")
        .check()
        .uncheck();
      cy.get("#alg5")
        .should("be.visible")
        .should("be.enabled")
        .should("not.be.checked")
        .check()
        .uncheck();
      cy.get("#alg6")
        .should("be.visible")
        .should("be.enabled")
        .should("not.be.checked")
        .check()
        .uncheck();
      randomChecker("#alg1");
      randomChecker("#alg2");
      randomChecker("#alg3");
      randomChecker("#alg4");
      randomChecker("#alg5");
      randomChecker("#alg6");
    }
    function randomChecker(name) {
      let randomBR2 = Math.round(Math.random());
      if (randomBR2 == 1) {
        cy.get(name).check();
      }
    }
  });
});
