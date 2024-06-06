import { EshopPage } from "../../../page_objects/eshop-tredgate/eshop_page";
import { HeaderSection } from "../../../page_objects/eshop-tredgate/header_section";
import { IphonePage } from "../../../page_objects/eshop-tredgate/iphone_page";

describe("Automation Test Store", () => {
  it("Eshop Opening, iPhone Verification and Logo Clicking test", () => {
    const eshopPage = new EshopPage();
    const iphonePage = new IphonePage();
    const headerSection = new HeaderSection();

    eshopPage.openEshopUrl();
    iphonePage.openIphoneUrl().verifyDescription();
    headerSection.clickLogo();
  });
});
