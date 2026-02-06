import { test, expect } from '@playwright/test';
import AccountPage from '../pages/account.page';
import { testUsers } from '../data/test-users';

test.describe('Account - Login', () => {
    let accountPage: AccountPage;

    test.beforeEach(async ({ page }) => {
        accountPage = new AccountPage(page);
        await accountPage.navigate();
    });

    test('should login successfully with valid credentials', async ({ page }) => {
        // Perform login
        await accountPage.login(testUsers.validUser.email, testUsers.validUser.password);

        // Verify user is logged in by checking for logout link
        const isLoggedIn = await accountPage.isLoggedIn();
        expect(isLoggedIn).toBeTruthy();
    });

    test('should show error message with invalid credentials', async ({ page }) => {
        // Attempt login with invalid credentials
        await accountPage.emailInput.fill(testUsers.invalidUser.email);
        await accountPage.passwordInput.fill(testUsers.invalidUser.password);
        await accountPage.loginButton.click();

        // Wait for error message to appear
        await page.waitForTimeout(2000);

        // Verify error message is displayed
        const errorMessage = await accountPage.getErrorMessage();
        expect(errorMessage).toBeTruthy();
        expect(errorMessage.toLowerCase()).toContain('error');
    });

    test('should login with remember me checkbox', async ({ page }) => {
        // Perform login with remember me option
        await accountPage.loginWithRememberMe(testUsers.validUser.email, testUsers.validUser.password);

        // Verify user is logged in
        const isLoggedIn = await accountPage.isLoggedIn();
        expect(isLoggedIn).toBeTruthy();
    });

    test('should display login form elements', async ({ page }) => {
        // Verify all login form elements are visible
        await expect(accountPage.emailInput).toBeVisible();
        await expect(accountPage.passwordInput).toBeVisible();
        await expect(accountPage.loginButton).toBeVisible();
        await expect(accountPage.rememberMeCheckbox).toBeVisible();
        await expect(accountPage.lostPasswordLink).toBeVisible();
    });

    test('should show error when email is empty', async ({ page }) => {
        // Try to login without email
        await accountPage.passwordInput.fill(testUsers.validUser.password);
        await accountPage.loginButton.click();

        // Wait for error message
        await page.waitForTimeout(2000);

        const errorMessage = await accountPage.getErrorMessage();
        expect(errorMessage).toBeTruthy();
    });

    test('should show error when password is empty', async ({ page }) => {
        // Try to login without password
        await accountPage.emailInput.fill(testUsers.validUser.email);
        await accountPage.loginButton.click();

        // Wait for error message
        await page.waitForTimeout(2000);

        const errorMessage = await accountPage.getErrorMessage();
        expect(errorMessage).toBeTruthy();
    });
});
