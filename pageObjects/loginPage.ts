import { Page, Locator, expect } from "@playwright/test";

export class LoginPage {
    page : Page;
    readonly getLoginPage: Locator;
    readonly getLoginField: Locator;
    readonly getLoginPassword: Locator;
    readonly getLoginUserBtn: Locator;

    constructor(page: Page) {
        this.page = page;
        this.getLoginPage = page.locator("css=#login_button_container");
        this.getLoginField = page.locator("css=#user-name");
        this.getLoginPassword = page.locator("css=#password");
        this.getLoginUserBtn = page.locator("css=#login-button");
    }

    async goto(){
        await this.page.goto("https://www.saucedemo.com/");
        expect(this.getLoginPage).toBeVisible();
    }

    async loginUserToPlatform(userLogin, userPassword){
        await this.getLoginField.pressSequentially(userLogin);
        await this.getLoginPassword.pressSequentially(userPassword);
        await this.getLoginUserBtn.click();

    }
}