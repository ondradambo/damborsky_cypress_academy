import { EshopPage } from "./eshop_page";

export class IphonePage extends HeaderSection {
  constructor() {
    this.iphoneUrl =
      "https://tredgate.com/eshop/index.php?route=product/product&product_id=40";
  }

  openIphoneUrl() {
    cy.visit(this.iphoneUrl);
    return this;
  }

  verifyDescription() {
    cy.get(".intro").should(
      "have.text",
      "iPhone is a revolutionary new mobile phone that allows you to make a call by simply tapping a name or number in your address book, a favorites list, or a call log. It also automatically syncs all your contacts from a PC, Mac, or Internet service. And it lets you select and listen to voicemail messages in whatever order you want just like email."
    );
    return this;
  }
}
