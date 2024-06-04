import { MenuSection } from "./menu_section";

export class HeaderSection extends MenuSection {
  constructor(path) {
    super(path);
    this.profileAnchor = "#user_dropdown > .dropdown-toggle";
    this.logoutAnchor = "#logout > a";
  }

  clickProjects() {
    cy.get(this.projectsLink).click();
    return new ProjectsPage();
  }
}
