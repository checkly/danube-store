import { expect, Locator, Page } from '@playwright/test';

export class DanubeShopPage {
	readonly page: Page;
	readonly shopItems: Locator;
	readonly shopSearchBar: Locator;
	readonly shopSearchButton: Locator;
	readonly buttonLogin: Locator;
	readonly fieldLoginEmail: Locator;
	readonly fieldLoginPassword: Locator;
	readonly buttonLoginProceed: Locator;
	readonly loginMessage: Locator;
	readonly logo: Locator;

	constructor(page: Page) {
		this.page = page;
		this.shopItems = page.locator('.preview > .preview-author');
		this.shopSearchBar = page.locator('input');
		this.shopSearchButton = page.locator('#button-search');
		this.buttonLogin = page.locator('#login');
		this.fieldLoginEmail = page.locator('#n-email');
		this.fieldLoginPassword = page.locator('#n-password2');
		this.buttonLoginProceed = page.locator('#goto-signin-btn');
		this.loginMessage = page.locator('#login-message');
		this.logo = page.locator('#logo');
	}

	async selectShopItem() {
		await this.shopItems.first().click();
	}

	async performSearch(searchString: string) {
		await this.shopSearchBar.fill(searchString);
		await this.shopSearchButton.click();
	}

	async performLogin(user) {
		await this.buttonLogin.click();
		await this.fieldLoginEmail.fill(user.email);
		await this.fieldLoginPassword.fill(user.password);
		await this.buttonLoginProceed.click();
	}

	async isPastLogin() {
		return this.loginMessage.isVisible();
	}

	async goto() {
		await this.logo.click();
	}
}
