import { Page, TestInfo } from '@playwright/test';
import fs from 'fs';
import path from 'path';

/**
 * Takes a screenshot and attaches it to the Playwright report
 */
export async function takeScreenshot(
  page: Page,
  testInfo: TestInfo,
  stepName: string
) {
  const screenshotsDir = path.join(testInfo.outputDir, 'screenshots');

  if (!fs.existsSync(screenshotsDir)) {
    fs.mkdirSync(screenshotsDir, { recursive: true });
  }

  const screenshotPath = path.join(
    screenshotsDir,
    `${stepName.replace(/\s+/g, '_')}.png`
  );

  await page.screenshot({ path: screenshotPath, fullPage: true });

  // Attach to Playwright HTML report
  await testInfo.attach(stepName, {
    path: screenshotPath,
    contentType: 'image/png',
  });
}
