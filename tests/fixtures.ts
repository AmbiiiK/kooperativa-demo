import {Page, test as base} from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { ProductsPage } from '../pages/ProductsPage';
import { CartPage } from '../pages/CartPage';
import credentials from '../test-data/credentials.json';

type PageFixtures = {
    loginPage: LoginPage;
    productsPage: ProductsPage;
    cartPage: CartPage;
    authenticatedPage: Page;
};

export const test = base.extend<PageFixtures>({

    authenticatedPage: async ({ page }, use) => {
        const loginPage = new LoginPage(page);
        await loginPage.goto();
        await loginPage.login(
            credentials.users.standard.username,
            credentials.users.standard.password
        );
        await use(page);
    },

    loginPage: async ({ authenticatedPage }, use) => {
        await use(new LoginPage(authenticatedPage));
    },

    productsPage: async ({ authenticatedPage }, use) => {
        await use(new ProductsPage(authenticatedPage));
    },

    cartPage: async ({ authenticatedPage }, use) => {
        await use(new CartPage(authenticatedPage));
    },


});

export { expect } from '@playwright/test';