describe("HW Simple Cypress Test", () => {
  it("Registrace uzivatele", () => {
    // Nastavení údajů pro formulář
    const firstName = "Ondřej";
    const lastName = "Damborský";
    const email = "o.dambor@seznam.cz";
    const telephone = "+420608944280";
    const password = "123456";

    // Otevření stránky
    cy.visit("http://tredgate.com/eshop/index.php?route=account/register");

    // Vyplnění registračního formuláře včetně odkliknutí newsletteru a privacy policy
    cy.get("#input-firstname").type(firstName);
    cy.get("#input-lastname").type(lastName);
    cy.get("#input-email").type(email);
    cy.get("#input-telephone").type(telephone);
    cy.get("#input-password").type(password);
    cy.get("#input-confirm").type(password);
    cy.get(".col-sm-10 > :nth-child(2) > input");
    cy.get('[type="checkbox"]');

    // Kliknutí na tlačítko Continue
    cy.contains("Continue").click();
  });
});
