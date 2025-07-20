# 🤖 Cypress Automation - Bot Creation & Validation Suite

This Cypress automation project is designed to test core functionalities like login, bot creation, and learning instance creation in a chatbot management system.

## 🚀 Features

This suite tests the core functionalities of the application with different real-world input conditions.

---

### **#login**
*User authentication is validated through these key scenarios:*

1. **With Valid Credentials**
   - **Description:** Valid user attempts to log in using correct username and password.
   - **Expected Outcome:** ✅ Successful login and redirection to the dashboard.

2. **With Invalid Credentials**
   - **Description:** Login attempt with wrong username or password.
   - **Expected Outcome:** ❌ Error message like _"Invalid username or password"_ and stay on login page.

---

### **#createbot**
*Bot creation functionality is tested using various input combinations:*

1. **Without a Name**
   - **Description:** Attempt to create a bot without entering any name.
   - **Expected Outcome:** ❌ Displays error stating the name is required.

2. **With a Duplicate Name**
   - **Description:** Attempt to create a bot using an already existing name.
   - **Expected Outcome:** ❌ Shows error like _"Bot name already exists. Please choose another."_.

3. **With a Unique Name**
   - **Description:** Create a bot with a unique, unused name.
   - **Expected Outcome:** ✅ Bot created successfully and visible in the bot list.

---

### **#learning instance creation**
*Tests the workflow of creating a learning instance:*

1. **Without Any Field Submission**
   - **Description:** User clicks submit without entering any data.
   - **Expected Outcome:** ❌ Form shows required field errors and blocks submission.

2. **With a Duplicate Value**
   - **Description:** User enters duplicate field values (e.g., field name already used).
   - **Expected Outcome:** ❌ Submission blocked with message like _"This value already exists."_.

3. **With a Unique Value**
   - **Description:** Form is submitted with all fields filled correctly with unique data.
   - **Expected Outcome:** ✅ Learning instance created and listed in dashboard.

---
### 🧠 Project Structure (POM)

```bash
AnuragCypressproject/
│
├── cypress/
│   ├── downloads/
│   ├── e2e/
│   │   ├── CreateBot.cy.js
│   │   ├── CreateLearningInstance.cy.js
│   │   └── login.cy.js
│   │
│   ├── fixtures/
│   │   ├── example.json
│   │   └── testData.json
│   │
│   ├── pages/
│   │   ├── AutomationPage.js
│   │   ├── BotPage.js
│   │   ├── LearningInstancePage.js
│   │   ├── LoginPage.js
│   │   └── messageBoxPage.js
│   │
│   ├── screenshots/
│   │
│   ├── support/
│   │   ├── commands.js
│   │   └── e2e.js
│   │
│   └── utils/
│       └── commonSteps.js
│
├── node_modules/
├── .env
├── .gitignore
├── cypress.config.js
├── package-lock.json
└── package.json
```



## 🚀 How to Clone and Run This Project

### 🛠 Prerequisites

- Node.js (v14 or higher)
- npm (v6 or higher)
- Git

### 📦 Steps to Clone and Run

```bash
# 1. Clone the Repository
git clone https://github.com/your-username/your-repo-name.git

# 2. Navigate into the Project
cd your-repo-name

# 3. Install Dependencies
npm install

# 4. Open Cypress Test Runner
npx cypress open
```
