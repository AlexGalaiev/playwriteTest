import { beforeEach } from "node:test"
import test, { expect } from "@playwright/test"
import { LoginPage } from "../../pageObjects/loginPage"
import { MainPage } from "../../pageObjects/mainPage";



test.beforeEach(async ({ page }) =>{
    let loginPage = new LoginPage(page);
    let userCredentials = new UserCredentials();
    await loginPage.loginUserToPlatform(userCredentials.userLoginName, userCredentials.userPassword);
})

test.afterEach(async ({ page }) =>{
    page.close;
})

test('Check trading card elements', async ({ page }) => {
    let mainPage = new MainPage(page)
    let localization = new ProjectLocalization();
    mainPage.checkElementText(mainPage.getTradingCardTittle, localization.tradingCardName);
    mainPage.checkElementText(mainPage.getTradingCardPrice, localization.tradingCardPrice);
    mainPage.getTradingCardAddTocardBtn.click();
    expect(mainPage.getTradingCardRemovebtn).toBeEnabled;
})