import { test, expect } from './fixtures';
import credentials from '../test-data/credentials.json';

test.describe('Login - locked account', () => {
    test('locked user cannot login', async ({ page, loginPage }) => {
        await loginPage.goto();
        await loginPage.login(
            credentials.users.locked.username,
            credentials.users.locked.password
        );

        await expect(loginPage.errorMessage).toContainText('locked out');

        await expect(page).toHaveURL(/.*\/$/);
    });
});