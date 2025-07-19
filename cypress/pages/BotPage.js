class BotPage {
  elements = {
    createBotButton: () => cy.contains("button", "Create a bot…"),
    botNameInput: () => cy.get('input[name="name"]'),
    descriptionInput: () => cy.get('input[name="description"]'),
    platformWindowsOption: () =>
      cy.get('[data-value="WINDOWS"]:visible').first(),
    submitButton: () => cy.contains('button[name="submit"]', "Create & edit"),
    errorToast: () => cy.get(".message__title"),
    nameValidationError: () =>
      cy.get(".input__error, .error-message, .textinput-cell-error").first(),
  };

  openCreateBotDialog() {
    this.elements.createBotButton().click({ force: true });
  }

  enterBotName(name) {
    this.elements.botNameInput().clear().type(name, { delay: 50 });
  }

  enterDescription(description) {
    this.elements.descriptionInput().clear().type(description);
  }

  selectWindowsPlatform() {
    this.elements.platformWindowsOption().click({ force: true });
  }

  submitForm() {
    this.elements.submitButton().click({ force: true });
  }

  verifyNameValidationError(expectedText) {
    this.elements.nameValidationError().should("contain.text", expectedText);
  }

  assertBotNameErrorIfExists() {
    const expectedText = "Unable to create a file or folder with the name";

    return cy.get("body", { timeout: 5000 }).then(($body) => {
      const hasMessage = $body.find(".message__title").length > 0;

      if (!hasMessage) {
        return cy.wrap(false); // return false if no error message is present
      }

      return cy
        .get(".message__title")
        .invoke("text")
        .then((text) => {
          const isDuplicate = text.includes(expectedText);
          return cy.wrap(isDuplicate); // return true/false wrapped
        });
    });
  }
}

export default BotPage;
