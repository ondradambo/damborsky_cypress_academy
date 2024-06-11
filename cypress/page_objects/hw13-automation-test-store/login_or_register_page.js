export class LoginOrRegisterPage {
  constructor() {
    this.url = "https://automationteststore.com/";
    this.clickLoginOrRegisterButton = "ul[id='customer_menu_top'] li a";
    this.clickRegisterAccountContinueButton = "button[title='Continue']";

  openLoginOrRegisterPage() {
    cy.visit(this.url);
  }

  clickLoginOrRegisterButton() {
    cy.get("ul[id='customer_menu_top'] li a").click();
  }

   clickLoginOrRegisterButton() {
    cy.get("button[title='Continue']").click();
  }
}
}