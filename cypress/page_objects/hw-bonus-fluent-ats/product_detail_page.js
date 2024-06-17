import { ShoppingCart } from "./shopping_cart";

export class ProductDetailPage {
  constructor() {
    this.addToCartButton = ".cart";
  }

  addToCart() {
    cy.get(this.addToCartButton).click();
    return new ShoppingCart();
  }
}
