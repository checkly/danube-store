import { test, expect } from '@playwright/test';
import { DanubeShopPage } from './pages/shop';
import { DanubeItemDetailsPage } from './pages/itemDetails';
import { registeredUser } from './data/users';

test('login', async ({ page }) => {
	await page.goto('https://danube-web.shop');

	const shopPage = new DanubeShopPage(page);

	await shopPage.performLogin(registeredUser);
	expect(await shopPage.isPastLogin());
});
