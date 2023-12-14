import { test } from "@playwright/test";
import { LoginPage } from "../../pageObjects/loginPage.js";
import { MainPage } from "../../pageObjects/mainPage.js";

let userLoginName = "standard_user";
let userPassword = "secret_sauce"

test('login to platform test', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.loginUserToPlatform(userLoginName, userPassword);
    const mainPage = new MainPage(page);
    mainPage.waitMainPage
})