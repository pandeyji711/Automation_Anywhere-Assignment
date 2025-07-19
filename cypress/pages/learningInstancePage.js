class LearningInstancePage {
  fetchIframeContent() {
    return cy
      .get("iframe.modulepage-frame", { timeout: 20000 })
      .its("0.contentDocument.body")
      .should("not.be.empty")
      .then(cy.wrap);
  }

  selectors = {
    aiNavButton: () => cy.get('button[name="ai"]', { timeout: 15000 }),
    iqBotLink: () =>
      cy.get('a[name="module-cognitive-iqbot-learning-instances"]', {
        timeout: 15000,
      }),
    createInstanceBtn: () =>
      this.fetchIframeContent().find("#create-learning-instance-button button"),
    dialogHeader: () =>
      this.fetchIframeContent().contains(
        ".clipped-text__string--for_presentation",
        "Create Learning Instance"
      ),
    nameInput: () => this.fetchIframeContent().find('input[name="name"]'),
    descInput: () =>
      this.fetchIframeContent().find('textarea[name="description"]'),
    upgradeDismiss: () => cy.get(".main-layout-upgrade-banner__close"),
    domainField: () =>
      this.fetchIframeContent().find('div[data-name="domainId"]').first(),
    dropdownToggleBtn: () =>
      this.selectors
        .domainField()
        .find('button[data-path="RioSelectInputQuery.toggle-button"]'),
    dropdownItems: () =>
      this.fetchIframeContent()
        .find('div[data-name="domainId"] div.rio-select-input-dropdown')
        .first(),
    userDefinedSelection: () =>
      this.selectors
        .dropdownItems()
        .find("span.clipped-text__string--for_presentation")
        .contains("User-defined"),
    nextStepBtn: () => this.fetchIframeContent().contains("button", "Next"),
    closeDialogBtn: () => this.fetchIframeContent().contains("button", "Close"),
    instanceHeaderLabel: () =>
      this.fetchIframeContent().find(".rio-header__label"),
    addFieldBtn: () =>
      this.fetchIframeContent().contains("button", "Add a field"),
    inputFieldName: () =>
      this.fetchIframeContent().find('input[placeholder="Field name"]'),
    inputFieldLabel: () =>
      this.fetchIframeContent().find('input[placeholder="Field label"]'),
    confidenceThreshold: () =>
      this.fetchIframeContent().find('input[name="confidenceThreshold"]'),
    confirmFieldCreation: () =>
      this.fetchIframeContent().find(
        'button[aria-label="Create"].command-button__button--is_solid'
      ),
    dashboardBtn: () => cy.get('a[name="dashboard"]', { timeout: 10000 }),
    instanceNameInList: (name) => cy.contains(name),
  };

  openLearningInstancePage() {
    this.selectors.aiNavButton().click();
    this.selectors.iqBotLink().click();

    cy.url().should(
      "include",
      "/modules/cognitive/iqbot/pages/learning-instances"
    );

    cy.get("body").then(($body) => {
      if ($body.find(".main-layout-upgrade-banner").length) {
        this.selectors.upgradeDismiss().click();
      }
    });

    cy.waitUntil(
      () =>
        this.fetchIframeContent()
          .find("#create-learning-instance-button button")
          .then(
            ($btn) => !$btn.hasClass("command-button__button--is_disabled")
          ),
      {
        errorMsg: "Create button is still disabled after timeout",
        timeout: 20000,
        interval: 1000,
      }
    );

    return this;
  }

  initiateInstanceCreation() {
    cy.get("body").then(($body) => {
      if ($body.find(".main-layout-upgrade-banner").length) {
        this.selectors.upgradeDismiss().click();
      }
    });

    this.selectors.createInstanceBtn().click({ force: true });
    this.selectors.nameInput().should("be.visible");
    return this;
  }

  enterBasicDetails(name, description) {
    this.selectors.nameInput().clear().type(name);
    this.selectors.descInput().clear().type(description);
    return this;
  }

  chooseUserDefinedOption() {
    this.fetchIframeContent()
      .find(
        'div[data-name="domainId"] button[data-path="RioSelectInputQuery.toggle-button"]'
      )
      .first()
      .should("be.visible")
      .click({ force: true });

    cy.wait(2000);

    this.fetchIframeContent()
      .find(".rio-select-input-dropdown-option-label-line__text-label-line")
      .contains("User-defined")
      .should("be.visible")
      .click({ force: true });

    this.fetchIframeContent()
      .find('div[data-name="domainId"] .clipped-text__string--for_presentation')
      .first()
      .should("contain.text", "User-defined");

    return this;
  }

  proceedToNext() {
    this.selectors.nextStepBtn().should("be.visible").click();
    return this;
  }

  validateInstanceHeader(name) {
    this.selectors.instanceHeaderLabel().should("contain.text", name);
    return this;
  }

  insertCustomField(fieldName, fieldLabel) {
    this.selectors.addFieldBtn().click();
    this.selectors.inputFieldName().should("be.visible").type(fieldName);
    this.selectors.inputFieldLabel().type(fieldLabel);
    this.selectors.confidenceThreshold().click();

    cy.wait(500);

    this.selectors
      .confirmFieldCreation()
      .should("be.visible")
      .should("have.attr", "data-input-status", "INTERACTIVE")
      .click();

    cy.wait(1000);
    return this;
  }

  returnToDashboardAndCheck(name) {
    this.selectors.dashboardBtn().should("be.visible").click();
    cy.wait(3000);

    cy.get("body").then(($body) => {
      if ($body.find("iframe").length) {
        cy.get("iframe")
          .its("0.contentDocument.body")
          .should("not.be.empty")
          .then(cy.wrap)
          .within(() => {
            cy.contains(name, { timeout: 15000 })
              .should("exist")
              .and("be.visible");
          });
      } else {
        cy.contains(name, { timeout: 15000 }).should("exist").and("be.visible");
      }
    });

    return this;
  }

  dismissPopup() {
    this.selectors.closeDialogBtn().should("be.visible").click();
    return this;
  }
}

export default LearningInstancePage;
