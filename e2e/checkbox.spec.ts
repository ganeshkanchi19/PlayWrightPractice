import { test } from '@playwright/test';
import { PracticePage } from '../pages/LocatorPracticePage';

test('Validate BMW checkbox using POM', async ({ page },testInfo) => {

  const practicePage = new PracticePage(page);

  await practicePage.navigateToPracticePage();

  // Validate initially unchecked
  const isChecked = await practicePage.isBMWChecked();
  console.log('Is BMW checked initially? ->', isChecked);

  // Check checkbox
  await practicePage.checkBMW();

  // Validate checked
  await practicePage.validateBMWChecked(testInfo);
});
