import { test, expect } from '@playwright/test';
import { DanubeShopPage } from './pages/shop';
import { DanubeItemDetailsPage } from './pages/itemDetails';

test('search', async ({page}) => {

    await page.goto('https://danube-web.shop');

    const shopPage = new DanubeShopPage(page);
    const itemDetailsPage = new DanubeItemDetailsPage(page);

    await shopPage.performSearch('For')
    await shopPage.selectShopItem()
    expect(await itemDetailsPage.isActive())

})