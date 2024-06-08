import { EshopPage } from "./eshop_page";

export class HeaderSection {
  constructor() {
    this.logo = "#logo";
  }

  clickLogo() {
    cy.get(this.logo).click();
    return new EshopPage();
  }
}
