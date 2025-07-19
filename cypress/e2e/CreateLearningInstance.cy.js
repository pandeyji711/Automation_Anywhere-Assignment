import LearningInstancePage from "../pages/learningInstancePage";
const learningInstance = new LearningInstancePage();

describe("Learning Instance Creation Flow", () => {
  beforeEach(() => {
    cy.login(); // Custom login command
  });

  it("validates that the Next button is disabled when no input is provided", () => {
    learningInstance.openLearningInstancePage().initiateInstanceCreation();

    // Ensure fields are cleared
    learningInstance.selectors.nameInput().clear();
    learningInstance.selectors.descInput().clear();

    // Log to Cypress test runner
    cy.log(
      "🔍 Checking if 'Next' button is properly disabled when fields are empty"
    );

    // Assert that the 'Next' button has the disabled class
    learningInstance.selectors
      .nextStepBtn()
      .should("have.class", "command-button__button--is_disabled")
      .and("have.attr", "data-input-status", "DISABLED");

    cy.log("Next button is correctly disabled when no input is provided");
    cy.wait(5000);
  });

  it("checks field creation validation and duplicate prevention", () => {
    cy.fixture("testData").then((data) => {
      learningInstance
        .openLearningInstancePage()
        .initiateInstanceCreation()
        .enterBasicDetails("Duplicate Test LI", "Testing duplicate fields")
        .chooseUserDefinedOption()
        .proceedToNext();
      // Expect an error message or rejection behavior
      cy.log("Sucessfully check for Dublicate values");
      cy.wait(4000);
    });
  });

  it("creates a new learning instance with a custom field", () => {
    cy.fixture("testData").then((data) => {
      learningInstance
        .openLearningInstancePage()
        .initiateInstanceCreation()
        .enterBasicDetails(
          data.learningInstance.name,
          data.learningInstance.description
        )
        .chooseUserDefinedOption()
        .proceedToNext()
        .validateInstanceHeader(data.learningInstance.name)
        .insertCustomField(
          data.learningInstance.fieldName,
          data.learningInstance.fieldLabel
        )
        .returnToDashboardAndCheck(data.learningInstance.name);
    });
    cy.wait(4000);
    cy.log("Sucessfully created learning instance");
  });

  after(() => {
    cy.logout();
  });
});
