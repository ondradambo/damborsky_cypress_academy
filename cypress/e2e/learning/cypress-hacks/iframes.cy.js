describe("Handling IFrame & Modals", () => {
  it("Handle webdriveruni iframe and modal", () => {
    cy.visit("https://webdriveruniversity.com/IFrame/index.html");
    // ! Kliknutí nebude fungovat, pro Cypress je element uvnitř iframe neviditelný
    //  cy.get("#button-find-out-more").click();
    cy.get("#frame").then((frame) => {
      const body = frame.contents().find("body");
      cy.wrap(body).as("iframe");
    });

    cy.get("@iframe").find("#button-find-out-more").click();
    cy.get("@iframe").find("#myModal").as("modal");

    cy.get("@modal").should((modalText) => {
      const text = modalText.text();
      expect(text).to.include(
        "Welcome to webdriveruniversity.com we sell a wide range of electrical goods such as laptops, game consoles, cameras..."
      );
    });
    cy.get("@modal").contains("Close").click();
  });
});
