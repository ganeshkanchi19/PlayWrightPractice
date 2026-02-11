import { Page, Locator, expect } from '@playwright/test';

export class DashboardPage {
  private readonly page: Page;
  private readonly dashboardBreadcrumb: Locator;

  constructor(page: Page) {
    this.page = page;

    this.dashboardBreadcrumb = page.locator(
      "//h6[contains(@class,'oxd-topbar-header-breadcrumb-module') and normalize-space()='Dashboard']"
    );
  }

  async validateDashboardLoaded(): Promise<void> {
    await expect(this.dashboardBreadcrumb).toBeVisible({ timeout: 15000 });
  }
}
