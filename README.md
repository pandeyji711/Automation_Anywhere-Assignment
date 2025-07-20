# 🤖 Cypress Automation - Bot Creation & Validation Suite

This Cypress automation suite is designed to test core functionalities like **user login**, **bot creation**, and **learning instance creation** in an Automation Anywhere system.

---

## 🚀 Features

This suite simulates real-world scenarios to ensure the core components of the application work as expected.

---

### 🔐 #Login

**User authentication is validated through the following scenarios:**

1. **✅ Valid Credentials**
   - **Description:** A user logs in with correct credentials.
   - **Expected Outcome:** Successfully redirected to the dashboard.

2. **❌ Invalid Credentials**
   - **Description:** Login attempt with incorrect username or password.
   - **Expected Outcome:** Error message shown (e.g., *"Invalid username or password"*) and user remains on login page.

---

### ⚙️ #CreateBot

**Tests the bot creation functionality with different input conditions:**

1. **❌ Without a Name**
   - **Description:** Attempt to create a bot without providing a name.
   - **Expected Outcome:** Error shown stating that the bot name is required.

2. **❌ Duplicate Name**
   - **Description:** Attempt to create a bot using an already existing name.
   - **Expected Outcome:** Displays error like *"Bot name already exists. Please choose another."*

3. **✅ Unique Name**
   - **Description:** Successfully create a bot with a unique name.
   - **Expected Outcome:** Bot is created and listed in the bot section.

---

### 📚 #Learning Instance Creation

**Covers all cases for creating a new learning instance:**

1. **❌ Without Filling Fields**
   - **Description:** Submit the form without entering required information.
   - **Expected Outcome:** Form shows validation errors and submission is blocked.

2. **❌ Duplicate Field Values**
   - **Description:** Attempt with values already present in existing instances.
   - **Expected Outcome:** Error message like *"This value already exists."* is shown.

3. **✅ Valid Unique Values**
   - **Description:** Submit the form with all valid and unique values.
   - **Expected Outcome:** Learning instance is created successfully and displayed in the dashboard.

---

## 🧠 Project Structure (Page Object Model - POM)

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
