import { HomePage } from "../../page_objects/pmtool/home_page";
import { LoginPage } from "../../page_objects/pmtool/login_page";

describe("Login and Logout Tests", () => {
  it("Login to pmtool", () => {
    // vytvoření proměnné loginPage (vybírám přes našeptávač, aby se to naimportovalo)
    const loginPage = new LoginPage();
    // objekt loginPage, volaná metoda openPmtool (cmd + kurzor na metodu, když nefunguje -> hledat chybu, i v PO)
    loginPage.openPmtool();
    loginPage.typeUsername("cypress_zima_2024");
    loginPage.typePassword("Zima2024Cypress");
    loginPage.clickLogin();
  });

  it("Pmtool Login and Logout test", () => {
    const loginPage = new LoginPage();
    const homePage = new HomePage();

    loginPage.openPmtool();
    loginPage.typeUsername("cypress_zima_2024");
    loginPage.typePassword("Zima2024Cypress");
    loginPage.clickLogin();
    homePage.clickProfile();
    homePage.clickLogout();
  });
});
