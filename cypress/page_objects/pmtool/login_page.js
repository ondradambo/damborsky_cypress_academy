import { HomePage } from "./home_page";

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
    return this;
  }
  // metoda = funkce + krok?
  typeUsername(username) {
    cy.get(this.usernameInput).type(username);
    return this;
  }

  typePassword(password) {
    cy.get(this.passwordInput).type(password);
    return this;
  }

  clickLogin() {
    cy.get(this.passwordInput).click();
    return new HomePage();
  }
}
