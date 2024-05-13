export class NewProjectExercise {
  constructor() {
    this.url = "https://tredgate.com/pmtool";
    this.usernameInput = "#username"; // název prvku + jeho typ -> usernameInput
    this.passwordInput = "#password";
    this.loginButton = "[type='submit']";
  }

  clickProjects() {
    cy.get(this.projectButton).click();
  }

  clickAddProject() {
    cy.get(this.addProjectButton).click();
  }

  typeName(Name) {
    cy.get(this.usernameInput).type(Name);
  }

  clickSave() {
    cy.get(this.saveButton).click();
  }

  clickLogoff() {
    cy.get(this.logoffButton).click();
  }
}
