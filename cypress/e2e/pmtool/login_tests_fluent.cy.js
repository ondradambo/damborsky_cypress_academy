import { LoginPage } from "../../page_objects/pmtool/login_page";

describe("Fluent login tests", () => {
  it("Login to pmtool using Fluent API test", () => {
    new LoginPage()
      .openPmtool()
      .typeUsername("cypress_zima_2024")
      .typePassword("Zima2024Cypress")
      .clickLogin()
      .clickProfile()
      .clickLogout();
  });
});
