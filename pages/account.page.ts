import { Page, Locator } from '@playwright/test';

class AccountPage {
    private page: Page;
    
    // Login form locators
    emailInput: Locator;
    passwordInput: Locator;
    loginButton: Locator;
    rememberMeCheckbox: Locator;
    lostPasswordLink: Locator;
    
    // Register form locators
    registerUsernameInput: Locator;
    registerEmailInput: Locator;
    registerPasswordInput: Locator;
    registerButton: Locator;
    
    // Success/Error messages
    errorMessage: Locator;
    successMessage: Locator;

    constructor(page: Page) {
        this.page = page;
        
        // Login form locators
        this.emailInput = page.locator('input[name="log"]');
        this.passwordInput = page.locator('input[name="pwd"]');
        this.loginButton = page.locator('input[name="wp-submit"]');
        this.rememberMeCheckbox = page.locator('input#rememberme');
        this.lostPasswordLink = page.locator('a.wp-lostpassword-link');
        
        // Register form locators
        this.registerUsernameInput = page.locator('#reg_username');
        this.registerEmailInput = page.locator('#reg_email');
        this.registerPasswordInput = page.locator('#reg_password');
        this.registerButton = page.locator('input[name="register"]');
        
        // Messages
        this.errorMessage = page.locator('ul.woocommerce-error');
        this.successMessage = page.locator('div.woocommerce-message');
    }

    async navigate() {
        await this.page.goto('https://practice.sdetunicorns.com/my-account/');
    }

    async login(email: string, password: string) {
        await this.emailInput.fill(email);
        await this.passwordInput.fill(password);
        await this.loginButton.click();
        
        // Wait for page to load after login
        await this.page.waitForURL('**/my-account/', { timeout: 10000 });
    }

    async loginWithRememberMe(email: string, password: string) {
        await this.emailInput.fill(email);
        await this.passwordInput.fill(password);
        await this.rememberMeCheckbox.check();
        await this.loginButton.click();
        
        // Wait for page to load after login
        await this.page.waitForURL('**/my-account/', { timeout: 10000 });
    }

    async register(username: string, email: string, password: string) {
        await this.registerUsernameInput.fill(username);
        await this.registerEmailInput.fill(email);
        await this.registerPasswordInput.fill(password);
        await this.registerButton.click();
        
        // Wait for successful registration
        await this.page.waitForURL('**/my-account/', { timeout: 10000 });
    }

    async getErrorMessage(): Promise<string> {
        return await this.errorMessage.textContent() || '';
    }

    async getSuccessMessage(): Promise<string> {
        return await this.successMessage.textContent() || '';
    }

    async isLoggedIn(): Promise<boolean> {
        // Check if logout link is visible (indicating user is logged in)
        return await this.page.locator('a:has-text("Logout")').isVisible();
    }
}

export default AccountPage;
