import { faker } from "@faker-js/faker";
import { LoginOrRegisterPage } from "../../page_objects/hw13-automation-test-store/login_or_register_page";
import { CreatingAccountPage } from "../../page_objects/hw13-automation-test-store/creating_account_page";

describe("AutomationTestStore test", () => {
  beforeEach(() => {
    new LoginOrRegisterPage();
  });
  it("All Steps According To The HW Specification", () => {
    const randomEmail = faker.internet.email();

    new CreatingAccountPage()
      .typeName("Ondřej")
      .typeLastName("Damborský")
      .typeEmail(randomEmail)
      .typeAddress("Hartigova 1000")
      .typeCity("Prague")
      .typeZipCode("130 00")
      .selectCountry("Czech Republic")
      .cy.wait(1000)
      .selectRegionOrState("Vysocina")
      .typeLoginName("ondradambo")
      .typePassword("123456")
      .typePasswordConfirm("123456")
      .subscribeButton()
      .checkprivacyPolicyCheckbox()
      .createAccountContinueButton();
  });
});
