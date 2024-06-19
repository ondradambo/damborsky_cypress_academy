import usersData from "../../fixtures/create_user_data.json";
import { LoginPage } from "../../page_objects/pmtool/login_page";
import { faker } from "@faker-js/faker";

describe("Data Driven Tests - Create users", () => {
  beforeEach(() => {
    new LoginPage()
      .openPmtool()
      .typeUsername(Cypress.env("pmtool_username"))
      .typePassword(Cypress.env("pmtool_password"))
      .clickLogin()
      .clickUsers();
  });

  usersData.forEach((userData) => {
    it(`Create user with role ${userData.role} and login`, () => {});
  });
});
