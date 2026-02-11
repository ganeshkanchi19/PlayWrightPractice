import { Page, Locator, expect } from '@playwright/test';

export class LoginPage {
  private readonly usernameInput: Locator;
  private readonly passwordInput: Locator;
  private readonly loginButton: Locator;

  constructor(private readonly page: Page) {
    this.usernameInput = page.locator('input[name="username"]');
    this.passwordInput = page.locator('input[name="password"]');
    this.loginButton = page.locator('button[type="submit"]');
  }

  /**
   * Navigate to login page and wait until it is fully ready
   */
  async navigate(url: string): Promise<void> {
    await this.page.goto(url, { waitUntil: 'networkidle' });
    await this.waitForLoginPage();
  }

  /**
   * Ensure login page is loaded
   */
  async waitForLoginPage(): Promise<void> {
    await expect(this.usernameInput).toBeVisible({ timeout: 20000 });
    await expect(this.passwordInput).toBeVisible();
  }

  /**
   * Perform login (NO navigation waits here)
   */
  async login(username: string, password: string): Promise<void> {
  await this.usernameInput.fill(username);
  await this.passwordInput.fill(password);

  await Promise.all([
    this.page.waitForURL('**/dashboard/**'),
    this.loginButton.click(),
  ]);
}
}
