import { HomePage } from "../../../page_objects/eshop-tredgate/eshop_page";
import { RegistrationPage } from "../../../page_objects/eshop-tredgate/registration_page";

describe("Eshop Registration Test", () => {
  const homePage = new HomePage();
  const registrationPage = new RegistrationPage();

  it("User Registration", () => {
    homePage.open();

    cy.contains("My Account").click();

    cy.contains("Register").click();

    registrationPage.fillRegistrationForm(
      "Ondřej",
      "Damborský",
      "on.dam@seznam.cz",
      "987654321",
      "987654321"
    );

    registrationPage.clickContinueButton();
  });
});
