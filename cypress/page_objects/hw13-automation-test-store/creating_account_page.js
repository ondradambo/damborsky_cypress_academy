export class CreatingAccountPage {
  constructor() {
    this.firstNameInput = "#AccountFrm_firstname";
    this.lastNameInput = "#AccountFrm_lastname";
    this.emailInput = "#AccountFrm_email";
    this.address1Input = "#AccountFrm_address_1";
    this.cityInput = "#AccountFrm_city";
    this.regionOrStateSelect = "#AccountFrm_zone_id";
    this.zipCodeInput = "#AccountFrm_postcode";
    this.countrySelect = "#AccountFrm_country_id";
    this.loginNameInput = "#AccountFrm_loginname";
    this.passwordInput = "#AccountFrm_password";
    this.passwordConfirmInput = "#AccountFrm_confirm";
    this.subscribeButton = "#AccountFrm_newsletter0";
    this.privacyPolicyCheckbox = "#AccountFrm_agree";
    this.createAccountContinueButton = "button[title='Continue']";
}

typeName(name) {
    cy.get(this.firstNameInput).type(name);
    return this;
  }

typeLastName(lastName) {
    cy.get(this.firstNameInput).type(lastName);
    return this;
  }

  typeEmail(email) {
    cy.get(this.emailInput).type(email);
    return this;
  }

  typeAddress(address) {
    cy.get(this.address1Input).type(address);
    return this;
  }

   typeCity(city) {
    cy.get(this.cityInput).type(city);
    return this;
  }

   selectRegionOrState(regionOrState) {
    cy.get(this.regionOrStateSelect).select(regionOrState);
    return this;
  }

 typeZipCode(zipCode) {
    cy.get(this.zipCodeInput).type(zipCode);
    return this;
  }

  selectCountry(country) {
    cy.get(this.countrySelect).select(country);
    return this;
  }

  typeLoginName(loginName) {
    cy.get(this.loginNameInput).type(loginName);
    return this;
  }

 typePassword(password) {
    cy.get(this.passwordInput).type(password);
    return this;
  }

  typePasswordConfirm(passwordConfirm) {
    cy.get(this.passwordConfirmInput).type(passwordConfirm);
    return this;
  }

  subscribeButton() {
    cy.get(this.subscribeButton).check("no");
    return this;
  }

  checkprivacyPolicyCheckbox() {
    cy.get(this.privacyPolicyCheckbox).check();
    return this;
  }
  
  createAccountContinueButton() {
    cy.get(this.createAccountContinueButton).click();
    return new      // TODO pokračovat
  }
  }
 
 