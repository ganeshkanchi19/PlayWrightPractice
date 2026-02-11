import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './e2e',

  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,

  reporter: [
    ['html'],              // Playwright default report
    ['allure-playwright'], // Allure report
  ],

  use: {
    viewport:{ width: 1920, height: 1080 },               
    trace: 'on',                  // always collect trace
    screenshot: 'on',              // always take screenshots
    video: 'on',                   // always record video
    headless: true,           //Runs in headless mode fro CI               
  },

  projects: [
    {
      name: 'chrome',
      use: { ...devices['Desktop Chrome'] ,channel: 'chrome'},
    },
    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
    },
  ],
});
