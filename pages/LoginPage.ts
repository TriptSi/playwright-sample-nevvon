import { expect, Locator, Page } from '@playwright/test';
import { ElementHelper } from '../helpers/elementHelper';

export class LoginPage {
  private readonly helper: ElementHelper;
  private readonly usernameInput: Locator;
  private readonly passwordInput: Locator;
  private readonly loginButton: Locator;

  constructor(private readonly page: Page) {
    this.helper = new ElementHelper();

    // Keep all login-page locators in this page object.
    // Update only these locators if the application UI changes.
    this.usernameInput = page.locator('input[id="login-email"], input[name="email"], input[placeholder*="Email" i]').first();
    this.passwordInput = page.locator('input[id="login-password"], input[name="password"]').first();
    this.loginButton = page.getByRole('button', { name: /log\s*in|login|sign\s*in/i }).first();
  }

  async open(): Promise<void> {
    await this.page.goto('/');
  }

  async login(username: string, password: string): Promise<void> {
    await this.helper.fill(this.usernameInput, username);
    await this.helper.fill(this.passwordInput, password);
    await this.helper.click(this.loginButton);
  }

  async verifyLoginSuccessful(): Promise<void> {
    await this.page.waitForLoadState('domcontentloaded');
    await expect(this.page).not.toHaveURL(/login/i);
  }

  async verifyLoginFailed(): Promise<void> {
    // Invalid credentials should keep the user on the login page.
    await expect(this.page).toHaveURL(/login/i);
  }
}
