/// <reference types="cypress" />

import LoginPage from "./LoginPage";
import testData from "../fixtures/data.json";
import AutomationPage from "../pages/AutomationPage";
const loginPage = new LoginPage();

export const Login = (username, password) => {
  loginPage.visit();
  loginPage.fillUsername(username);
  loginPage.fillPassword(password);
  loginPage.submit();
};

export const ValidLogin = () => {
  performLogin(testData.username, testData.password);
};

export const InvalidLogin = () => {
  performLogin("invalidUser", "wrongPassword");
};

export const Logout = () => {
  loginPage.logout();
};
