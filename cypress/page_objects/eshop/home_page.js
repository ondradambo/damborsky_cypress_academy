export class HomePage {
  constructor() {
    this.url = "https://tredgate.com/eshop/";
  }

  open() {
    cy.visit(this.url);
  }
}
