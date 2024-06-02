import { LoginPage } from "../../page_objects/pmtool/login_page";

describe("Fluent Login tests", () => {
  beforeEach(() => {
    new LoginPage().openPmtool();
  });

  it("Login to pmtool using Fluent API test", () => {
    new LoginPage()
      .typeUsername("username")
      .typePassword("password")
      .clickLogin()
      .clickProfile()
      .clickLogout();
  });
  it("Open lost password and get back to login", () => {
    new LoginPage().clickPasswordForgotten().clickBack();
  });
});
