import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { InventoryPage } from '../pages/InventoryPage';
//import { CartPage } from '../pages/CartPage';
import cartItems from '../test-data/cart-items.json';

test.describe('Add to cart', () => {
    test.beforeEach(async ({page}) => {
        const login = new LoginPage(page);
        await login.goto();

        // SauceDemo test creds (nejsou citlivé, ale i tak je hezké je mít v ENV)
        const user = process.env.E2E_USER || 'standard_user';
        const pass = process.env.E2E_PASS || 'secret_sauce';

        await login.login(user, pass);

        const inventory = new InventoryPage(page);
        //await inventory.assertLoaded();
    });
});