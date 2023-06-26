import { test, expect } from '@playwright/test';
import { DanubeShopPage } from './pages/shop';
import { DanubeItemDetailsPage } from './pages/itemDetails';
import { DanubeCartPage } from './pages/cart';
import { DanubeCheckoutPage } from './pages/checkout';
import { registeredUser } from './data/users';

test('checkout', async ({ page }) => {

	await page.goto('https://danube-web.shop');

	const shopPage = new DanubeShopPage(page);
	const itemDetailsPage = new DanubeItemDetailsPage(page);
	const cartPage = new DanubeCartPage(page);
	const checkoutPage = new DanubeCheckoutPage(page);

	await shopPage.selectShopItem();
	await itemDetailsPage.addToCart();
	await cartPage.proceedToCheckout();
	await checkoutPage.completeOrderForm(registeredUser);
	await checkoutPage.finalizeOrder();

	expect(await checkoutPage.successMessageIsShown());

});
