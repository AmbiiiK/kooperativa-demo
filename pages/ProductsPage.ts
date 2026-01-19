import { expect, Locator, Page } from '@playwright/test';

export class ProductsPage {
    readonly page: Page;
    readonly cartLink: Locator;
    readonly cartBadge: Locator;

    constructor(page: Page) {
        this.page = page;
        this.cartLink = page.locator('[data-test="shopping-cart-link"]');
        this.cartBadge = page.locator('[data-test="shopping-cart-badge"]');
    }

    // DRY: Jedna metoda pro získání product container
    getProductByName(name: string): Locator {
        return this.page.locator('.inventory_item').filter({ hasText: name });
    }

    // KISS: Pouze základní akce
    async addToCartByName(productName: string) {
        const product = this.getProductByName(productName);
        await product.getByRole('button', { name: /add to cart/i }).click();
    }

    async goToCart() {
        await this.cartLink.click();
    }
}