export class GeneralPOPage {
  // definování třídy (název stejný jako soubor)
  constructor() {
    // ve třídě je konstruktor (většinou prázdný)
    this.someElement = "selector"; // do konstruktoru dáváme jednotl.	selektory elementů na stránce
  }

  actionWIthElement() {
    // nějaká akce, standardně používáme cy.get(this.someElement)
    cy.log(this.someElement);
  }
}
