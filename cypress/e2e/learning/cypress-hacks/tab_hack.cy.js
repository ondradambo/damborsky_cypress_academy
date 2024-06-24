describe("Tab hack checks", () => {
  beforeEach(() => {
    cy.visit("https://webdriveruniversity.com/index.html");
  });

  it("Modify tab to open in same screen", () => {
    // ! Toto nebude fungovat, protože se otvírá nová záložka
    //cy.get("#contact-us").click();
    cy.get("#contact-us").invoke("removeAttr", "target").click({ force: true });
    cy.get('[name="first_name"]').type("Cypress Hacks!");
  });

  it("Open LoginPortal in WebdriverUniversity in same window", () => {
    cy.get("#login-portal").invoke("removeAttr", "target").click({ force: true });
    cy.get('input[id="text"]').type("Něco");
  });
});
