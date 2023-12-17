import { Locator, Page, expect } from "@playwright/test";


export class MainPage {
    page: Page;
    readonly getMainPage: Locator;
    readonly getMainPageTradingCard: Locator;
    readonly getTradingCardTittle: Locator;
    readonly getTradingCardPrice: Locator;
    readonly getTradingCardAddTocardBtn: Locator;
    readonly getTradingCardRemovebtn: Locator;

    constructor(page: Page){
        this.page = page;
        this.getMainPage = page.locator("css=.inventory_container");
        this.getMainPageTradingCard = page.locator("xpath=//div[@class='inventory_item'][1]");
        this.getTradingCardTittle = this.getMainPageTradingCard.locator("xpath=//a[@id='item_4_title_link']");
        this.getTradingCardPrice = this.getMainPageTradingCard.locator("css=.inventory_item_price");
        this.getTradingCardAddTocardBtn = this.getMainPageTradingCard.locator("css='[data-test='add-to-cart-sauce-labs-backpack']'");
        this.getTradingCardRemovebtn = this.getMainPageTradingCard.locator("[data-test='remove-sauce-labs-backpack']")
    }

    async waitMainPage(){
        expect(this.getMainPage).toBeVisible
    }
    async checkElementText(elemnetToCheck, textExample){
        expect(elemnetToCheck).toHaveText(textExample);
    }

}