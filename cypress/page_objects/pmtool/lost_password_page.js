import { BasePage } from "./common/base_page";
import { LoginPage } from "./login_page";

export class LostPasswordPage extends BasePage {
  constructor() {
    super("module=users/restore_password");
    this.usernameInput = ":nth-child(2) > .input-icon > .form-control";
    this.emailInput = ":nth-child(3) > .input-icon > .form-control";
    this.backButton = "#back-btn";
    this.submitButton = ".btn-info";
  }