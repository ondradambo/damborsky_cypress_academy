import { GeneralPOPage } from "../../../page_objects/learning/general_po_page";

describe("First Page Objects Tests", () => {
  it("General Page Object Init", () => {
    // v rámci it-u inicializujeme objekt a násl. na něj voláme jednotl. kroky
    const firstPageObject = new GeneralPOPage(); // new = výroba objektu
    firstPageObject.actionWithElement(); // testovací krok
  });
});
