import { test, expect } from './fixtures';
import credentials from '../test-data/credentials.json';

test.describe('Add to Cart - Negative', () => {
    test('locked user cannot login', async ({ page, loginPage }) => {
        await loginPage.goto();
        await loginPage.login(
            credentials.users.locked.username,
            credentials.users.locked.password
        );

        // KISS: Jednoduchá aserce
        await expect(loginPage.errorMessage).toContainText('locked out');

        // Playwright Best Practice: Čekání na URL je built-in
        await expect(page).toHaveURL(/.*\/$/);
    });
});