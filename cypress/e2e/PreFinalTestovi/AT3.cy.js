//PROBA TEST 3

describe("TreciZadatak", () => {
  it("OtvoriStranicu", function () {
    cy.viewport(1920, 1080);
    cy.visit("http://10.15.1.204:3000/");
    cy.get(".nav-link[href='/menu']").click();
    cy.wait(1000);
    cy.title().should("eq", "QA Exam Kitchen");
    cy.url().should("include", "menu");
  });
  it.only("OdaberiHranu", function () {
    cy.viewport(1920, 1080);
    cy.visit("http://10.15.1.204:3000/menu");
    cy.wait(1000);

    cy.get(":nth-child(1)").each(($e, index, $list) => {
      const text = $e.text();
      if (text.includes("Breaded Zuchinni with garlic sauce")) {
        cy.get(":nth-child(1) >  .text > .btn")
          .eq(index)
          .then(function (bName) {
            const bookName = bName.text();
            expect(bookName).to.equal("+");
          });
      }
    });

    //k x r - naslovi su prvi red
    //   for (let k = 1; k <= 2; k++) {
    //     for (let r = 2; r <= 9; r++) {
    //       if (r <= 6 && k == 2) {
    //         let listSelector =
    //           ":nth-child(" + k + ") > :nth-child(" + r + ") > .text > .btn";
    //         cy.get(listSelector)
    //           .should("be.visible")
    //           .should("be.enabled")
    //           .click();
    //         cy.log(k, " x ", r);
    //         cy.wait(3000);
    //       } else {
    //         let listSelector = ":nth-child(" + r + ") >  .text > .btn";
    //         cy.get(listSelector)
    //           .should("be.visible")
    //           .should("be.enabled")
    //           .click();
    //         cy.log(k, " x ", r);
    //         cy.wait(3000);
    //   }
    // }
    //   }
  });
});
//cy.get('#listaItema > :nth-child(4)')
