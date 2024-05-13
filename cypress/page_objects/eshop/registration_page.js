export class RegistrationPage {
  constructor() {
    this.url = "https://tredgate.com/eshop/index.php?route=account/register";
  }

  open() {
    cy.visit(this.url);
  }

  getFirstNameInput() {
    return cy.get("#input-firstname");
  }

  getLastNameInput() {
    return cy.get("#input-lastname");
  }

  getEmailInput() {
    return cy.get("#input-email");
  }

  getTelephoneInput() {
    return cy.get("#input-telephone");
  }

  getPasswordInput() {
    return cy.get("#input-password");
  }

  getConfirmPasswordInput() {
    return cy.get("#input-confirm");
  }

  fillRegistrationForm(firstName, lastName, email, telephone, password) {
    this.getFirstNameInput().type(firstName);
    this.getLastNameInput().type(lastName);
    this.getEmailInput().type(email);
    this.getTelephoneInput().type(telephone);
    this.getPasswordInput().type(password);
    this.getConfirmPasswordInput().type(password);
  }

  clickContinueButton() {
    cy.get("button#continue").click();
  }
}
