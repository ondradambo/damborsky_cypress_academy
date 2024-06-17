import { HomePage } from "../../page_objects/hw-bonus-fluent-ats/home_page";

describe("HW Bonus Fluent ATS test", () => {
  it("Adding Skinsheen Bronzer Stick Into a Cart", () => {
    new HomePage().openHomePage().openProductDetailPage().addToCart();
  });
});
