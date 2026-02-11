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
    viewport:null, 
    launchOptions:{
      args: ['--start-maximized']   //Maximize the window
    },              
    trace: 'on',                  // always collect trace
    screenshot: 'on',              // always take screenshots
    video: 'on',                   // always record video
  },

  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
    },
  ],
});
