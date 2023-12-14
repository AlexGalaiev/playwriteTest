import { Locator, Page, expect } from "@playwright/test";


export class MainPage {
    page: Page;
    readonly getMainPage: Locator;
    
    constructor(page: Page){
        this.page = page;
        this.getMainPage = page.locator("css=.inventory_container")
    }

    async waitMainPage(){
        expect(this.getMainPage).toBeVisible
    }
}