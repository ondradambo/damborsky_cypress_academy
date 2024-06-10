import { faker } from "@faker-js/faker";

describe("HW 13 Automation Test Store", () => {
  it("Test", () => {
    const exampleEmail = faker.internet.email();
    cy.log(exampleEmail);
  });
});

beforeEach(() => {
  new LoginPage()
    .openPmtool()
    .typeUsername(Cypress.env("pmtool_username"))
    .typePassword(Cypress.env("pmtool_password"))
    .clickLogin();
});
