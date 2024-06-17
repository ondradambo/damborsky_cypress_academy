import newProjectData from "../../fixtures/new_project_data.json";
import { faker } from "@faker-js/faker";
import moment from "moment";
import { LoginPage } from "../../page_objects/pmtool/login_page";
import { ProjectsPage } from "../../page_objects/pmtool/projects_page";

// na zákl. vstupních dat (z Json souboru) jsme schopní dynamicky vytvářet testy
describe("Data Driven Tests", () => {
  beforeEach(() => {
    new LoginPage()
      .openPmtool()
      .typeUsername(Cypress.env("pmtool_username"))
      .typePassword(Cypress.env("pmtool_password"))
      .clickLogin()
      .clickProjects();
  });

  newProjectData.forEach((projectData) => {
    it(`DDT Project: ${projectData.description}`, () => {
      let startDate;
      // generování náhodného jména s číslem
      const projectName =
        projectData.name_prefix + faker.number.int({ max: 99999 });
      cy.log(projectName);
      generateStartDate(projectData.start_date, "YYY-MM-DD");
      cy.log(startDate);

      new ProjectsPage()
        .clickAddProject()
        .selectPriority(projectData.priority)
        .selectStatus(projectData.status)
        .typeStartDate(startDate)
        .typeName(projectName)
        .clickSave()
        .clickProjectInfo()
        .startDateHaveText(
          generateStartDate(projectData.start_date, "DD/MM/YYYY")
        )
        .statusHaveText(projectData.status)
        .priorityHaveText(projectData.priority);
    });
  });
});

function generateStartDate(startDate, format) {
  // funkcionalita switch rozhoduje, na základě vstupních dat, jaká budou data; knihovna moment
  switch (startDate) {
    case "today":
      startDate = moment().format(format);
      break;
    case "tomorrow":
      startDate = moment().add(1, "days").format(format);
      break;
    case "yesterday":
      startDate = moment().subtract(1, "days").format(format);
      break;
    default:
      throw new Error("Invalid start_date");
  }
  return startDate;
}
