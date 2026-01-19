import { test, expect } from './fixtures';
import testData from '../test-data/products.json';
import credentionals from '../test-data/credentials.json';

test.describe('Add to Cart', () => {
    // Fixture už zajistí přihlášení - DRY!
    test.use({ storageState: { cookies: [], origins: [] } });

    test.beforeEach(async ({ loginPage }) => {
        await loginPage.goto();
        await loginPage.login(
            credentionals.users.standard.username,
            credentionals.users.standard.password
        );
    });

    test('should add single product to cart', async ({ page, productsPage, cartPage }) => {
        const product = testData.products.backpack;

        // Přidej do košíku
        await productsPage.addToCartByName(product.name);

        // Playwright Best Practice: Auto-waiting!
        await expect(productsPage.cartBadge).toHaveText('1');

        // Jdi do košíku
        await productsPage.goToCart();

        // KISS: Jednoduché aserce
        await expect(cartPage.getItemName(product.name)).toBeVisible();
        await expect(cartPage.getItemPrice(product.name)).toHaveText(product.price);
    });

    test('should add multiple products', async ({ productsPage, cartPage }) => {
        const products = Object.values(testData.products);

        // DRY: Loop místo duplicitního kódu
        for (const product of products) {
            await productsPage.addToCartByName(product.name);
        }

        await expect(productsPage.cartBadge).toHaveText(products.length.toString());
        await productsPage.goToCart();

        // DRY: Ověření v loopu
        for (const product of products) {
            await expect(cartPage.getItemName(product.name)).toBeVisible();
        }
    });
});