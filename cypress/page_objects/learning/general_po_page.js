// definování třídy (název stejný jako soubor)
export class GeneralPOPage {
  // ve třídě je konstruktor (většinou prázdný) s atributama
  constructor() {
    // do konstruktoru dáváme jednotl.	selektory elementů na stránce (atribut = hodnota)
    this.someElement = "selector";
  }
  // nějaká akce (metoda?)
  actionWIthElement() {
    // standardně používáme cy.get(this.someElement)
    cy.log(this.someElement);
  }
}
