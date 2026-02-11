import { Page, Locator, expect,TestInfo } from '@playwright/test';
import { takeScreenshot } from '../utils/screenshotUtil';

export class PracticePage {

  readonly page: Page;
  readonly bmwCheckbox: Locator;

  constructor(page: Page) {
    this.page = page;
    this.bmwCheckbox = page.locator('#bmwcheck');  // ✅ Use ID
  }

  async navigateToPracticePage() {
    await this.page.goto('https://www.letskodeit.com/practice');
    console.log("Practice page is displayed successfully");
  }

  async isBMWChecked(): Promise<boolean> {
    return await this.bmwCheckbox.isChecked();
   
  }

  async checkBMW() {
    await this.bmwCheckbox.check();
  }

  async uncheckBMW() {
    await this.bmwCheckbox.uncheck();
  }

  async validateBMWChecked(testInfo: TestInfo) {
    await this.bmwCheckbox.waitFor({ state: 'visible' });
    await expect(this.bmwCheckbox).toBeChecked();
    console.log("BMW checkbox is checked succesfully");
    await takeScreenshot(this.page, testInfo, 'Check for BMW checkbox');
  }

  async validateBMWNotChecked() {
    await expect(this.bmwCheckbox).not.toBeChecked();
  }
}
