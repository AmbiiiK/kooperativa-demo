import { Page, Locator } from '@playwright/test';

export class CartPage {
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    getItemName(productName: string): Locator {
        return this.getCartItemByName(productName).locator('[data-test="inventory-item-name"]');
    }

    getItemPrice(productName: string): Locator {
        return this.getCartItemByName(productName).locator('[data-test="inventory-item-price"]');
    }

    getCartItemByName(name: string): Locator {
        return this.page
            .locator('[data-test="inventory-item"]')
            .filter({ hasText: name });
    }
}