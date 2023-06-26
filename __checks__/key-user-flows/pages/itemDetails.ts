import { expect, Locator, Page } from '@playwright/test';

export class DanubeItemDetailsPage {
	readonly page: Page;
	readonly addToCartButton: Locator;
	readonly detailsContainer: Locator;

	constructor(page: Page) {
		this.page = page;
		this.addToCartButton = page.locator('text=add to cart');
		this.detailsContainer = page.locator('.detail')
	}

	async addToCart() {
		await this.addToCartButton.click();
	}

	async isActive() {
		return this.detailsContainer.isVisible();
	}

}
