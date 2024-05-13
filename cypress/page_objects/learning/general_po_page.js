export class GeneralPOPage {
  // definování třídy (název stejný jako soubor)
  constructor() {
    // ve třídě je konstruktor (většinou prázdný) s atributama
    this.someElement = "selector"; // do konstruktoru dáváme jednotl.	selektory elementů na stránce (atribut = hodnota)
  }

  actionWIthElement() {
    // nějaká akce (metoda?), standardně používáme cy.get(this.someElement)
    cy.log(this.someElement);
  }
}
