import { LoginPage } from "../../page_objects/pmtool/login_page";

describe("New Project Tests", () => {
  it("Login to pmtool", () => {
    const loginPage = new LoginPage(); // vytvoření proměnné loginPage (vybírám přes našeptávač, aby se to naimportovalo)
    loginPage.openPmtool(); // objekt loginPage, volaná metoda openPmtool (cmd + kurzor na metodu, když nefunguje -> hledat chybu, i v PO)
    loginPage.typeUsername("cypress_zima_2024");
    loginPage.typePassword("Zima2024Cypress");
    loginPage.clickLogin();
  });

  it("Add Project", () => {
    const homePage = new Proje();

    loginPage.openPmtool();
    loginPage.typeUsername("cypress_zima_2024");
    loginPage.typePassword("Zima2024Cypress");
    loginPage.clickLogin();
    homePage.clickProfile();
    homePage.clickLogout();
  });
});
