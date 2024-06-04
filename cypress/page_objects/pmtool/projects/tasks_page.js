import { HeaderSection } from "../common/header_section";
import { CreateNewTaskModal } from "./create_new_task_modal";

export class TasksPage extends HeaderSection {
  constructor(projectId = "") {
    super(`?module=items/items&path=21-${projectId}/22`);
    this.addTaskButton = '[test_id="Add Task"]';
    this.projectInfoAnchorXPath = '//a[text()="Project Info"]';
  }

  clickAddTask() {
    cy.get(this.addTaskButton).click();
    return new CreateNewTaskModal();
  }
  clickProjectInfo() {
    cy.xpath(this.projectInfoAnchorXPath).click();
    return new ProjectInfoPage();
  }
}
