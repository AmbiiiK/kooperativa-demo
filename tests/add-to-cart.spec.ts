import { test, expect } from './fixtures';
import testData from '../test-data/products.json';

test.describe('Add to Cart', () => {
    test('should add single product to cart', async ({ page, productsPage, cartPage }) => {
        const product = testData.products.backpack;

        await productsPage.addToCartByName(product.name);
        await expect(productsPage.cartBadge).toHaveText('1');

        await productsPage.goToCart();

        await expect(cartPage.getItemName(product.name)).toBeVisible();
        await expect(cartPage.getItemPrice(product.name)).toHaveText(product.price);
    });

    test('should add multiple products', async ({ productsPage, cartPage }) => {
        const products = Object.values(testData.products);

        for (const product of products) {
            await productsPage.addToCartByName(product.name);
        }

        await expect(productsPage.cartBadge).toHaveText(products.length.toString());
        await productsPage.goToCart();

        for (const product of products) {
            await expect(cartPage.getItemName(product.name)).toBeVisible();
        }
    });
});