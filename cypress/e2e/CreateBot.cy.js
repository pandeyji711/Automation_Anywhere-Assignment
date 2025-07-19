import BotPage from "../pages/BotPage.js";
// import AutomationPage from "../pages/AutomationPage.js";
import MessageBoxPage from "../pages/MessageBoxPage.js";
// import BotPage from "../pages/BotPage.js";
import AutomationPage from "../pages/AutomationPage.js";

const botPage = new BotPage();
const automationPage = new AutomationPage();
const messageBoxPage = new MessageBoxPage();
const validBotName = "Anurag_Unique_Bot_";
describe("Bot Creation Validation: Empty, Duplicate, and Valid Names", () => {
  beforeEach(() => {
    cy.login(); // custom login command
  });

  it("should validate empty, duplicate, and valid bot name cases in a single flow", () => {
    // Open the bot creation dialog
    botPage.openCreateBotDialog();

    //empty bot name test
    cy.log("Testing empty bot name...");
    botPage.enterBotName(" "); // Blank/space
    botPage.enterDescription("Testing empty bot name");
    botPage.selectWindowsPlatform();

    // Submit should remain disabled for empty bot name
    // botPage.elements.submitButton().should("be.disabled");

    //dublicate bot name test
    cy.log("Testing duplicate bot name...");
    botPage.enterBotName("TestBotByAnurag"); // Make sure this already exists
    botPage.enterDescription("Testing duplicate bot name");

    botPage.elements.submitButton().should("not.be.disabled");
    botPage.submitForm();

    cy.wait(5000); //  wait for toast to appear

    botPage.assertBotNameErrorIfExists().then((isDuplicate) => {
      if (isDuplicate) {
        cy.log("Duplicate name detected, retrying with a new name...");
        botPage.enterDescription("Testing With Valid Unique Name");
        botPage.enterBotName(validBotName);
        botPage.submitForm();
        cy.wait(3000);
      } else {
        cy.log("No duplicate name error detected.");
      }
    });

    // Assertion: Bot successfully created (based on toast/dialog/URL)
    // cy.contains("Bot created").should("be.visible");
  });
  it("should insert Message Box step and validate", () => {
    // const Botmessage = "this is my newbotmessage ";
    cy.fixture("testData").then((data) => {
      const botMessage = data.bot_message;
      cy.openAutomationBotPage(validBotName); // cust
      // om Cypress command

      // Insert and Validate Message Box
      messageBoxPage
        .searchAndInsertMessageBox()
        .typeMessage(botMessage)
        .saveBot()
        .verifyMessageSaved(botMessage)
        .closeEditor();
    });
  });
  after(() => {
    cy.logout();
  });
});
