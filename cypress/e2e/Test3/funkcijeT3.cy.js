export const selectFood = (food, price) => {
  cy.log(food.length);
  let x = Math.floor(Math.random() * food.length);
  for (let i = 0; i < price.length; i++) {
    console.log(`price [${i}]=`, price[i]);
  }
  let num;
  cy.get(".text")
    .contains(String(food[x]).trim())
    .parentsUntil(".menus")
    .find("[type='button']")
    .click({ force: true });

  cy.wait(3000);
  return [food[x], price[x]];
};

export const hasDuplicates = (a) => {
  const noDups = new Set(a);
  return a.length == noDups.size;
};
