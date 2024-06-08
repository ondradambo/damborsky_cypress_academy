import { HeaderSection } from "./header_section";

export class EshopPage extends HeaderSection {
  constructor() {
    super();
    this.eshopUrl = "http://tredgate.com/pmtool/";
  }

  openEshopUrl() {
    cy.visit(this.eshopUrl);
    return this;
  }
}
