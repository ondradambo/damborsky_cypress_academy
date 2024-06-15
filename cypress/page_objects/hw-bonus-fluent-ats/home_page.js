import { ProductDetailPage } from "./product_detail_page";

export class HomePage {
  constructor() {
    this.url = "https://automationteststore.com/";
    this.productDetailPage =
      "div[id='block_frame_featured_1769'] a[title='Skinsheen Bronzer Stick']";
  }
  openHomePage() {
    cy.visit(this.url);
    return this;
  }

  openProductDetailPage() {
    cy.get(this.productDetailPage).click();
    return new ProductDetailPage();
  }
}
