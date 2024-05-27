import { HeaderSection } from "./common/header_section";
import { ProjectsPage } from "./projects_page";

export class HomePage extends HeaderSection {
  constructor() {
    super();
    this.projectsLink = "#Projects a";
    this.welcomePageHeader = "#welcome-page-header";
    cy.get(this.welcomePageHeader).should("be.visible");
  }

  clickProjects() {
    cy.get(this.projectsLink).click();
    return new ProjectsPage();
  }
}
