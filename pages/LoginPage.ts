import { expect, Locator, Page } from '@playwright/test';

    export class LoginPage {
        readonly page: Page;
        readonly usernameInput: Locator;
        readonly passwordInput: Locator;
        readonly loginBtn: Locator;
        readonly error: Locator;

    constructor(page: Page) {
        this.page = page;
        this.usernameInput = page.locator('[data-test="username"]');
        this.passwordInput = page.locator('[data-test="password"]');
        this.loginBtn = page.locator('[data-test="login-button"]');
        this.error = page.locator('[data-test="error"]');
    }

    async goto() {
        await this.page.goto('/');
        await expect(this.loginBtn).toBeVisible();
    }

    async login(username: string, password: string) {
        await this.usernameInput.fill(username);
        await this.passwordInput.fill(password);
        await this.loginBtn.click();
    }
}
