import { invoke } from "../../../../node_modules/cypress/types/lodash/index";
import { LoginPage } from "../../../page_objects/pmtool/login_page";

describe("Using Aliases", () => {
  it("Checking login placeholders consistency", () => {
    new LoginPage().openPmtool();
    cy.get("#username").invoke("attr", "placeholder").as("usernamePlaceholder");
    cy.get("#password").invoke("attr", "placeholder").as("passwordPlaceholder");
    cy.get("#forget_password").click();
    cy.get("#back-btn").click();
    // slovo "placeholder" jsem si vymyslel vlastní
    cy.get("@usernamePlaceholder").then((placeholder) => {
      cy.get("#username").should("have.attr", "placeholder", placeholder);
    });
    cy.get("@passwordPlaceholder").then((placeholder) => {
      cy.get("#password").should("have.attr", "placeholder", placeholder);
    });
  });
});
