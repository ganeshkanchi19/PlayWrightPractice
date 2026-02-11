import { test } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { DashboardPage } from '../pages/DashBoardPage';
import { credentails, urls } from '../utils/testdata';

test('Validate dashboard title after successful login', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const dashboardPage = new DashboardPage(page);

  // Navigate to login page
  await loginPage.navigate(urls.login);

  // Perform login ONLY ONCE
  await loginPage.login(credentails.username, credentails.password);

  // Validate Dashboard breadcrumb
  await dashboardPage.validateDashboardLoaded();
});
