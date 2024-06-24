describe("Multi Domain test", () => {
  it.skip("NOT WORKING: Opening 2 apps in 1 test", () => {
    cy.visit("https://tredgate.cz");
    cy.get("#menu-item-35").click();
    cy.visit("https://tredgate.com/pmtool");
    cy.get("#username").type("1234");
  });

  it("cy.origin test", () => {
    cy.visit("https://tredgate.cz");
    cy.get("#menu-item-35").click();
    cy.origin("https://tredgate.com/pmtool", () => {
      
    });
  });
});
