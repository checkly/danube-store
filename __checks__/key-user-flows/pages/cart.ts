import { expect, Locator, Page } from '@playwright/test';

export class DanubeCartPage {
    readonly page: Page
    readonly checkoutButton: Locator;

	constructor(page: Page) {
		this.page = page;
		this.checkoutButton = page.locator('.call-to-action').last();
	}

    async proceedToCheckout() {
        await this.checkoutButton.click()
    }
    
}