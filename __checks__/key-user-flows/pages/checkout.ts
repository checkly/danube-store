import { expect, Locator, Page } from '@playwright/test';

export class DanubeCheckoutPage {
	readonly page: Page;
	readonly buyButton: Locator;

	constructor(page: Page) {
		this.page = page;
		this.buyButton = page.locator('.call-to-action').last();
	}

	async completeOrderForm(user) {
		await this.page.locator('#s-name').type(user.name);
		await this.page.locator('#s-surname').type(user.surname);
		await this.page.locator('#s-address').type(user.address.streetAndNumber);
		await this.page.locator('#s-zipcode').type(user.address.zipcode);
		await this.page.locator('#s-city').type(user.address.city);
		await this.page.locator('#s-company').type(user.address.company);
		await this.page.locator('.checkout > form').click();
		await this.page.locator('#asap').click();
	}

	async finalizeOrder() {
		await this.buyButton.click();
	}

	async successMessageIsShown() {
		return this.page.getByText('order is on the way').isVisible();
	}
}
