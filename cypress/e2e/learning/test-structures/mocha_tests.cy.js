import { LoginPage } from "../../../page_objects/pmtool/login_page";

describe("Mocha tests", () => {
  beforeEach(() => {
    cy.viewport(800, 600);
    cy.log("Běžím před každým testem.");
  });

  it("Visit pmtool", () => {
    new LoginPage().openPmtool();
  });

  it("Pmtool login", () => {
    new LoginPage()
      .openPmtool()
      .typeUsername("username")
      .typePassword("password")
      .clickLogin();
  });

  afterEach(() => {
    cy.log("Běžím po dokončení každého testu.");
  });
});
