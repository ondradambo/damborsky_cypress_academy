describe("Operating with Cypress Tests", () => {
  it("Failed Login Test", () => {
    cy.visit("https://tredgate.com/pmtool");
    cy.get("#username").type("cypress_zima_2024");
    cy.get("#password").type("Zima2024Cypress");
    cy.get(".btn").click();
  });
  it.skip("BUG1 Test failure - element not present", () => {
    cy.visit("https://tredgate.com/pmtool");
    cy.get("#username2").type("cypress_zima_2024");
  });
  it.only("Passed Login Test", () => {
    cy.visit("https://tredgate.com/pmtool");
    cy.get("#username").type("cypress_zima_2024 ");
    cy.get("#password").type("Zima2024Cypress");
    cy.get(".btn").click();
  });
});
