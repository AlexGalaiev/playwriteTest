import { expect, test } from "@playwright/test";
import { LoginPage } from "../../pageObjects/loginPage.js";
import { MainPage } from "../../pageObjects/mainPage.js";

let userLoginName = "standard_user";
let userPassword = "secret_sauce";
let userLoginLockedName = "locked_out_user";

test('login to platform test', async ({ page }) => {
    let loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.loginUserToPlatform(userLoginName, userPassword);
    let mainPage = new MainPage(page);
    mainPage.waitMainPage
})

test('login to platform by locked user', async ({ page }) => {
    let loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.loginUserToPlatform(userLoginLockedName, userPassword);
    await expect(loginPage.getLoginErrorMSG.allInnerTexts()).toContain("Epic sadface: You can only access '/inventory.html' when you are logged in.")

})