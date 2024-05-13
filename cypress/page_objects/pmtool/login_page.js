export class LoginPage {
  constructor() {
    this.url = "https://tredgate.com/pmtool";
    this.usernameInput = "#username"; // název prvku + jeho typ -> usernameInput
    this.passwordInput = "#password";
    this.loginButton = "[type='submit']";
  }
  // funkce
  openPmtool() {
    // krok
    cy.visit(this.url);
  }
  // metoda = funkce + krok?
  typeUsername(username) {
    cy.get(this.usernameInput).type(username);
  }

  typePassword(password) {
    cy.get(this.passwordInput).type(password);
  }

  clickLogin() {
    cy.get(this.passwordInput).click();
  }
}
